import React, { useContext } from 'react';
import { Form } from '../../Common';
import styled from 'styled-components';
import FormContextProvider from '../../Common/Form/FormContextProvider';
import { Board } from '../../../@types';
import { BoardContext, BoardContextValue } from '../../../context';

const Container = styled.div`
  width: 80%;
  margin: 50px auto;
  text-align: left;

  h1 {
    margin-bottom: 50px;
  }

  p {
    margin-bottom: 20px;
  }

  button {
    width: 70px;
    height: 35px;
    margin: 15px auto;
    font-size: 14px;
    border: none;
    background: #000000;
    color: #ffffff;

    &:hover {
      opacity: 0.7;
    }
  }
`;

const BoardPage: React.FC = () => {
  const { boardList, board } = useContext(BoardContext) as BoardContextValue;

  const handleSubmit = useCallback(() => {
    confirm('글을 등록하시겠습니까?');
  }, []);
  ll(board);

  return (
    <Container className='Board'>
      {board &&
        boardList
          .filter((item) => item.id === board.id)
          .map((board: Board) => (
            <div key={board.id}>
              <h1>{board.title}</h1>
              <p>{board.content}</p>
            </div>
          ))}
      <FormContextProvider>
        <Form onSubmit={handleSubmit}>
          <input name='comment' placeholder='댓글을 입력해주세요' required />
          <button>등록하기</button>
        </Form>
      </FormContextProvider>
      {board &&
        boardList
          .filter((item) => item.id === board.id)
          .map((board: Board) => (
            <div key={board.id}>
              {board.comment?.map((board) => (
                <div key={board.id}>
                  <p>{board.user_id}</p>
                  <p>{board.content}</p>
                </div>
              ))}
            </div>
          ))}
    </Container>
  );
};

BoardPage.displayName = 'BoardPage';
export default BoardPage;
