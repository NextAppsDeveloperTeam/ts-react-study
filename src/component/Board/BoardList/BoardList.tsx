import React, { ChangeEvent, useCallback, useContext, useState } from 'react';
import { Title } from '../../Common';
import { Board } from '../../../@types';
import { BoardContext, BoardContextValue, UserContext, UserContextValue } from '../../../context';
import { useNavigate } from 'react-router-dom';
import { AddBtn, Container, PageBtn, SearchBtn, TableStyled } from './BoardList.style';

const BoardList: React.FC = () => {
  const navigate = useNavigate();

  const { userList, getUserInfo } = useContext(UserContext) as UserContextValue;
  const { boardList } = useContext(BoardContext) as BoardContextValue;

  const [searchInput, setSearchInput] = useState('');
  const [searchList, setSearchList] = useState<Board[]>([]);
  const [searchSelect, setSearchSelect] = useState('title');

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
        <input type='text' placeholder='검색' value={searchInput} onChange={handleChangeInput} />
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
                {!searchInput ? (
                  <>
                    {boardList.map((board: Board) => {
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
                      <td className='notSearch' colSpan={5}>검색 결과가 없습니다.</td>
                    </tr>
                  </>
                )}
              </>
            ) : (
              <>
                {searchList.map((boards: Board) => {
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
                      <td>{userList.map((user) => (user.id === boards.user_id ? user.name : ''))}</td>
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
      <PageBtn>
        <button>&lt;</button>
        <button>1</button>
        <button>&gt;</button>
      </PageBtn>
      <AddBtn>
        <button onClick={() => navigate('/boardPost')}>글쓰기</button>
      </AddBtn>
    </Container>
  );
};

BoardList.displayName = 'BoardList';
export default BoardList;
