import React, { useEffect } from 'react';
import {Form, FormCommands, Title} from '../../Common';
import styled from 'styled-components';
import FormContextProvider from '../../Common/Form/FormContextProvider';
import BoardText from '../../Common/Form/BoardText';
import BoardTextArea from '../../Common/Form/BoardTextArea';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: 530px;
    height: 40px;
    margin: 15px auto;
    font-size: 16px;
    border: none;
    background: #000000;
    color: #ffffff;

    &:hover {
      opacity: 0.7;
    }
  }
`;

const BoardPost: React.FC = () => {
  const formCommandsRef = useRef<FormCommands>(null);

  useEffect(() => {
    setTimeout(() => {
      if (formCommandsRef.current) {
        formCommandsRef.current.focus('title');
      }
    }, 1);
  }, []);

  const handleSubmit = useCallback(() => {
    confirm('글을 등록하시겠습니까?');
  }, []);

  return (
    <Container className='Board'>
      <Title text='게시글 작성' />
      <FormContextProvider>
        <Form ref={formCommandsRef} onSubmit={handleSubmit}>
          <BoardText label='제목' name='title' placeholder='제목을 입력해주세요' required />
          <BoardTextArea label='내용' name='content' placeholder='내용을 입력해주세요' required />
          <button>등록하기</button>
        </Form>
      </FormContextProvider>
    </Container>
  );
};

BoardPost.displayName = 'BoardItem';
export default BoardPost;
