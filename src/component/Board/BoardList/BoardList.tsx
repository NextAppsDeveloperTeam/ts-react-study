import React, { useContext } from 'react';
import { Title } from '../../Common';
import styled from 'styled-components';
import { Board } from '../../../@types';
import {BoardContext, BoardContextValue, UserContext, UserContextValue} from '../../../context';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  width: 80%;
  margin: 0 auto;

  button {
    background: #000000;
    color: #ffffff;
    border: none;
  }
`;

const TableStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 450px;

  table {
    width: 100%;

      thead {
        th {
          padding: 10px 0;
        }

        th:nth-child(1) {
          width: 15%;
        }

        th:nth-child(2) {
          width: 45%;
        }

        th:nth-child(3) {
          width: 12%;
        }

        th:nth-child(4) {
          width: 18%;
        }

        th:nth-child(5) {
          width: 10%;
        }
      }

      tbody {
        td {
          padding: 8px 0;
        }

        td:nth-child(2) {
          text-align: left;
        }
      }
  }
`;

const SearchBtn = styled.div`
  text-align: right;
  margin: 20px 0;

  select {
    padding: 5px;
  }

  input {
    width: 180px;
    padding: 5px;
  }

  button {
    padding: 7px 15px;
  }
`;

const AddBtn = styled.div`
  text-align: center;

  button {
    padding: 7px 15px;
  }
`;

const BoardList: React.FC = () => {
  const navigate = useNavigate();

  // const { userList } = useContext(UserContext) as UserContextValue;
  const { boardList } = useContext(BoardContext) as BoardContextValue;

  return (
    <Container className='Board'>
      <Title text='자유게시판' />
      <SearchBtn>
        <select>
          <option>제목</option>
          <option>내용</option>
          <option>작성자</option>
        </select>
        <input placeholder='검색' />
        <button>검색</button>
      </SearchBtn>
      <TableStyled>
        <table>
          {/*<colgroup>*/}
          {/*  <col width='15%' />*/}
          {/*  <col width='45%' />*/}
          {/*  <col width='12%' />*/}
          {/*  <col width='18%' />*/}
          {/*  <col width='10%' />*/}
          {/*</colgroup>*/}
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
            {boardList.map((board: Board) => (
              <tr>
                <td>{board.id}</td>
                <td>{board.content}</td>
                <td>{board.user_id}</td>
                <td>
                  {board.create_date.getFullYear()}.{(board.create_date.getMonth() + 1).toString().padStart(2, '0')}.
                  {board.create_date.getDate().toString().padStart(2, '0')}
                </td>
                <td>{board.views}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableStyled>
      <AddBtn>
        <button onClick={() => navigate('/boardPost')}>글쓰기</button>
      </AddBtn>
    </Container>
  );
};

BoardList.displayName = 'BoardItem';
export default BoardList;
