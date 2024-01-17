import React, { ChangeEvent, useCallback, useContext, useState } from 'react';
import { Form, FormContextProvider, Pagination, Title } from '../../Common';
import { Board } from '../../../@types';
import { BoardContext, BoardContextValue, UserContext, UserContextValue } from '../../../context';
import { useLocation, useNavigate } from 'react-router-dom';
import { AddBtn, Container, SearchBtn, TableStyled } from './BoardList.style';

const BoardList: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { getUserInfo } = useContext(UserContext) as UserContextValue;
  const { boardList } = useContext(BoardContext) as BoardContextValue;

  const [searchInput, setSearchInput] = useState('');
  const [searchList, setSearchList] = useState<Board[]>([]);
  const [searchSelect, setSearchSelect] = useState('title');
  const [btnClick, setBtnClick] = useState(false);
  const [page, setPage] = useState(1);
  const [block, setBlock] = useState(0);
  const limit = 10;
  let total = boardList.length;
  const offset = (page - 1) * limit;

  useEffect(() => {
    setPage(Number(location.hash.substring(3)));
    navigate(`/boardList${location.hash}`);
  }, [location.hash, navigate]);

  const handleChangeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value.toLowerCase());
  }, []);

  const handleChangeSelect = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setSearchSelect(e.target.value);
  }, []);

  const handleSubmit = useCallback(() => {
    const list = boardList.filter((item) =>
      searchSelect === 'title'
        ? item.title.toLowerCase().includes(searchInput)
        : searchSelect === 'content'
        ? item.content.toLowerCase().includes(searchInput)
        : getUserInfo(item.user_id)?.name.toLowerCase().includes(searchInput)
    );
    setSearchList(list);
    setBtnClick(true);
  }, [boardList, getUserInfo, searchInput, searchSelect]);

  return (
    <Container className='Board'>
      <Title text='자유게시판' />
      <SearchBtn>
        <FormContextProvider>
          <Form onSubmit={handleSubmit}>
            <select onChange={handleChangeSelect}>
              <option value='title'>제목</option>
              <option value='content'>내용</option>
              <option value='writer'>작성자</option>
            </select>
            <input type='text' placeholder='검색' onChange={handleChangeInput} />
            <button className='searchBtn'>검색</button>
          </Form>
        </FormContextProvider>
      </SearchBtn>
      <hr />
      <TableStyled>
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
              <th>등록일</th>
              <th>조회수</th>
            </tr>
          </thead>
          <tbody>
            {searchList.length === 0 ? (
              <>
                {!btnClick ? (
                  <>
                    {boardList.slice(offset, offset + limit).map((board: Board) => {
                      return (
                        <tr
                          key={board.id}
                          onClick={() => {
                            navigate(`/boardPage/${board.id}`);
                          }}
                        >
                          <td>{board.id}</td>
                          <td>{board.title}</td>
                          <td>{getUserInfo(board.user_id)?.name}</td>
                          <td>{board.create_date.substring(0, 10).replace(/-/g, '.')}</td>
                          <td>{board.views}</td>
                        </tr>
                      );
                    })}
                  </>
                ) : (
                  <>
                    <tr>
                      <td className='notSearch' colSpan={5}>
                        검색 결과가 없습니다.
                      </td>
                    </tr>
                  </>
                )}
              </>
            ) : (
              <>
                {searchList.slice(offset, offset + limit).map((boards: Board) => {
                  total = searchList.length;
                  return (
                    <tr
                      key={boards.id}
                      onClick={() => {
                        navigate(`/boardPage/${boards.id}`);
                      }}
                    >
                      <td>{boards.id}</td>
                      <td>{boards.title}</td>
                      <td>{getUserInfo(boards.user_id)?.name}</td>
                      <td>{boards.create_date.substring(0, 10).replace(/-/g, '.')}</td>
                      <td>{boards.views}</td>
                    </tr>
                  );
                })}
              </>
            )}
          </tbody>
        </table>
      </TableStyled>
      {btnClick && searchList.length === 0 ? (
        <Pagination total={1} limit={limit} page={page} setPage={setPage} block={block} setBlock={setBlock} />
      ) : (
        <Pagination total={total} limit={limit} page={page} setPage={setPage} block={block} setBlock={setBlock} />
      )}
      <AddBtn>
        <button onClick={() => navigate('/boardPost')}>글쓰기</button>
      </AddBtn>
    </Container>
  );
};

BoardList.displayName = 'BoardList';
export default BoardList;
