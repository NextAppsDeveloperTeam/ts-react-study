import React from 'react';
import { Title } from '../../Common';
import styled from 'styled-components';

const Container = styled.div``;

const Board: React.FC = () => {
  // const { auth } = useContext(UserContext) as UserContextValue;

  return (
    <Container className='Board'>
      <Title text='자유게시판' />
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>조회수</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>내용</td>
            <td>aaa</td>
            <td>1</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};

Board.displayName = 'Board';
export default Board;
