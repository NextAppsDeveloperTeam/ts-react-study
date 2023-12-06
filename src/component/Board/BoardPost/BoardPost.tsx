import React, { useContext, useEffect } from 'react';
import { Form, FormCommands, FormText, Title, FormContextProvider, FormTextArea } from '../../Common';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { BoardContext, BoardContextValue } from '../../../context';

const Container = styled.div`
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
`;

const Button = styled.div`
  text-align: center;
  margin: 15px 0 0 12px;

  button {
    width: 100%;
    height: 40px;
    font-size: 16px;
    border: none;
    background: #000000;
    color: #ffffff;

    &:hover {
      opacity: 0.7;
    }
`;

const BoardPost: React.FC = () => {
  const navigate = useNavigate();

  const formCommandsRef = useRef<FormCommands>(null);

  const { addBoard } = useContext(BoardContext) as BoardContextValue;

  useEffect(() => {
    setTimeout(() => {
      if (formCommandsRef.current) {
        formCommandsRef.current.focus('title');
      }
    }, 1);
  }, []);

  const handleSubmit = useCallback(
    (values: { title: string; content: string }) => {
      addBoard(values.title, values.content);
      navigate('/boardList');
    },
    [addBoard, navigate]
  );

  return (
    <Container className='Board'>
      <Title text='게시글 작성' />
      <FormContextProvider>
        <Form ref={formCommandsRef} onSubmit={handleSubmit}>
          <FormText label='제목' name='title' placeholder='제목을 입력해주세요' required />
          <FormTextArea label='내용' name='content' placeholder='내용을 입력해주세요' required />
          <Button>
            <button>등록하기</button>
          </Button>
        </Form>
      </FormContextProvider>
    </Container>
  );
};

BoardPost.displayName = 'BoardPost';
export default BoardPost;
