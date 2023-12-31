import React, { ChangeEvent, useCallback, useContext, useState } from 'react';
import { Pagination, Title } from '../../Common';
import { Board } from '../../../@types';
import { BoardContext, BoardContextValue, UserContext, UserContextValue } from '../../../context';
import { useNavigate } from 'react-router-dom';
import { AddBtn, Container, SearchBtn, TableStyled } from './BoardList.style';

const BoardList: React.FC = () => {
  const navigate = useNavigate();

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

  const handleChangeInput = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value.toLowerCase());
  }, []);

  const handleChangeSelect = useCallback((e: ChangeEvent<HTMLSelectElement>) => {
    setSearchSelect(e.target.value);
  }, []);

  const handleClick = useCallback(() => {
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
        <select onChange={handleChangeSelect}>
          <option value='title'>제목</option>
          <option value='content'>내용</option>
          <option value='writer'>작성자</option>
        </select>
        <input type='text' placeholder='검색' onChange={handleChangeInput} />
        <button onClick={handleClick} disabled={searchInput === ''}>
          검색
        </button>
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
                        <tr key={board.id}>
                          <td>{board.id}</td>
                          <td>
                            <a
                              onClick={() => {
                                navigate(`/boardPage/${board.id}`);
                              }}
                            >
                              {board.title}
                            </a>
                          </td>
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
                    <tr key={boards.id}>
                      <td>{boards.id}</td>
                      <td>
                        <a
                          onClick={() => {
                            navigate(`/boardPage/${boards.id}`);
                          }}
                        >
                          {boards.title}
                        </a>
                      </td>
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
      <Pagination total={total} limit={limit} page={page} setPage={setPage} block={block} setBlock={setBlock} />
      <AddBtn>
        <button onClick={() => navigate('/boardPost')}>글쓰기</button>
      </AddBtn>
    </Container>
  );
};

BoardList.displayName = 'BoardList';
export default BoardList;
