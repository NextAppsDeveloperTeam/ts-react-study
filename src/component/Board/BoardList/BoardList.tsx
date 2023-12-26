import React, { ChangeEvent, useContext, useState } from 'react';
import { Title } from '../../Common';
import { Board } from '../../../@types';
import { BoardContext, BoardContextValue, UserContext, UserContextValue } from '../../../context';
import { useNavigate } from 'react-router-dom';
import { AddBtn, Container, PageBtn, SearchBtn, TableStyled } from './BoardList.style';

const BoardList: React.FC = () => {
  const navigate = useNavigate();

  const { userList } = useContext(UserContext) as UserContextValue;
  const { boardList } = useContext(BoardContext) as BoardContextValue;

  const [searchInput, setSearchInput] = useState('');
  const [searchList, setSearchList] = useState<Board[]>([]);

  const getSearchData = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value.toLowerCase());
  }, []);

  const handleClick = useCallback(() => {}, []);

  return (
    <Container className='Board'>
      <Title text='자유게시판' />
      <SearchBtn>
        <select>
          <option>제목</option>
          <option>내용</option>
          <option>작성자</option>
        </select>
        <input type='text' placeholder='검색' onChange={getSearchData} />
        <button onClick={handleClick}>검색</button>
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
            {searchInput === '' ? (
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
                      <td>{userList.map((user) => (user.id === board.user_id ? user.name : ''))}</td>
                      <td>{board.create_date.substring(0, 10).replace(/-/g, '.')}</td>
                      <td>{board.views}</td>
                    </tr>
                  );
                })}
              </>
            ) : (
              <>ddd</>
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
