import React, { useContext } from 'react';
import { Form } from '../../Common';
import styled from 'styled-components';
import FormContextProvider from '../../Common/Form/FormContextProvider';
import { Board } from '../../../@types';
import { BoardContext, BoardContextValue, UserContext, UserContextValue } from '../../../context';
import BoardText from "../../Common/Form/BoardText";

const Container = styled.div`
  width: 80%;
  max-width: 1000px;
  margin: 50px auto;
  text-align: left;

  .boardTitle {
    font-weight: bold;
    font-size: 28px;
  }

  .boardContent {
    font-size: 17px;
    margin: 50px 0;
  }

  .commentName,
  .commentContent {
    margin-bottom: 10px;
  }

  .commentForm {
    width: 100%;
    max-width: 800px;
    margin-bottom: 15px;

    input {
      float: left;
      width: 75%;
      height: 36px;
      padding-left: 5px;
    }

    button {
      margin-top: -10px;
      width: 70px;
      height: 40px;
      font-size: 14px;
      border: none;
      background: #000000;
      color: #ffffff;

      &:hover {
        opacity: 0.7;
      }
    }
  }

  hr {
    width: 80%;
  }
`;

const BoardPage: React.FC = () => {
  const { userList } = useContext(UserContext) as UserContextValue;
  const { boardList, board, addComment } = useContext(BoardContext) as BoardContextValue;

  const handleSubmit = useCallback((value: Board) => {
    confirm('글을 등록하시겠습니까?');
    addComment(value);
  }, [addComment]);
  ll(board);

  return (
    <Container className='Board'>
      {board &&
        boardList
          .filter((item) => item.id === board.id)
          .map((board: Board) => (
            <div key={board.id}>
              <div className='boardTitle'>{board.title}</div>
              <div className='boardContent'>{board.content}</div>
            </div>
          ))}
      <FormContextProvider>
        <Form onSubmit={handleSubmit}>
          <div className='commentForm'>
            <BoardText name='content' placeholder='댓글을 입력해주세요' />
            <button>등록하기</button>
          </div>
        </Form>
      </FormContextProvider>
      {board &&
        boardList
          .filter((item) => item.id === board.id)
          .map((board: Board) => (
            <div key={board.id}>
              {board.comment?.map((board) => (
                <div key={board.id}>
                  <div className='commentName'>
                    {userList.map((user) => (user.id === board.user_id ? user.name : ''))}
                  </div>
                  <div className='commentContent'>{board.content}</div>
                  <hr />
                </div>
              ))}
            </div>
          ))}
    </Container>
  );
};

BoardPage.displayName = 'BoardPage';
export default BoardPage;
