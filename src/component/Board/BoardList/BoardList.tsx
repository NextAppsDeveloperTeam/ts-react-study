import React, { useContext } from 'react';
import { Title } from '../../Common';
import styled from 'styled-components';
import { Board } from '../../../@types';
import { UserContext, UserContextValue } from '../../../context';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
  table {
    width: 100%;
    
    thead {
      th:nth-child(1) {
        width: 10%;
      }
      th:nth-child(2) {
        width: 45%;
      }
      th:nth-child(3) {
        width: 15%;
      }
      th:nth-child(4) {
        width: 20%;
      }
      th:nth-child(5) {
        width: 10%;
      }
    }
    
    tbody {
      tr {
        border-bottom: 1px solid #000;
      }
    }
  }
`;

const BoardList: React.FC = () => {
  // const { auth } = useContext(UserContext) as UserContextValue;
  const { boardList } = useContext(UserContext) as UserContextValue;

  return (
    <Container className='Board'>
      <Title text='자유게시판' />
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
          {boardList.map((board: Board) => (
            <tr>
              <td>{board.id}</td>
              <td>{board.content}</td>
              <td>{board.user_id}</td>
              <td>{board.create_date.toString()}</td>
              <td>{board.views}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};

BoardList.displayName = 'BoardItem';
export default BoardList;
