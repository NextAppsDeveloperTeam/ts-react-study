import React from 'react';
import { Title } from '../../Common';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  button {
    padding: 7px 15px;
    background: #000000;
    color: #ffffff;
    border: none;
  }
`;

const BoardPost: React.FC = () => {
  return (
    <Container className='Board'>
      <Title text='게시글 작성' />
      <input type='text' placeholder='제목' />
      <textarea placeholder='내용' />
      <button>게시</button>
    </Container>
  );
};

BoardPost.displayName = 'BoardItem';
export default BoardPost;
