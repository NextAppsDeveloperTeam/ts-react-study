import React from 'react';
import {Form, FormText, Title} from '../../Common';
import styled from 'styled-components';
import FormContextProvider from "../../Common/Form/FormContextProvider";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    width: 280px;
    height: 40px;
    margin: 15px 0;
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
  return (
    <Container className='Board'>
      <Title text='게시글 작성' />
        <FormContextProvider>
            <Form>
                <FormText label='제목' name='title' placeholder='제목을 입력해주세요' required />
                <textarea placeholder='내용을 입력해주세요' />
                <button>게시하기</button>
            </Form>
        </FormContextProvider>
    </Container>
  );
};

BoardPost.displayName = 'BoardItem';
export default BoardPost;
