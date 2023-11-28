import React, { useContext } from 'react';
import { Form, Title } from '../../Common';
import styled from 'styled-components';
import FormContextProvider from '../../Common/Form/FormContextProvider';
import { Board } from '../../../@types';
import { BoardContext, BoardContextValue } from '../../../context';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  const { boardList } = useContext(BoardContext) as BoardContextValue;

  const handleSubmit = useCallback(() => {
    confirm('글을 등록하시겠습니까?');
  }, []);

  return (
    <Container className='Board'>
      <Title text='게시글 작성' />
      {boardList.map((board: Board) => (
        <div key={board.id}>
          <p>{board.title}</p>
          <p>{board.content}</p>
        </div>
      ))}
      <FormContextProvider>
        <Form onSubmit={handleSubmit}>
          <input name='comment' placeholder='댓글을 입력해주세요' required />
          <button>등록하기</button>
        </Form>
      </FormContextProvider>
    </Container>
  );
};

BoardPage.displayName = 'BoardPage';
export default BoardPage;
