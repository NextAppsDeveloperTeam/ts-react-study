import MyMenu from '../MyMenu/MyMenu';
import React, { useContext } from 'react';
import { UserContext, UserContextValue } from '../../../context';
import styled from 'styled-components';
import { Title } from '../../Common';

const Container = styled.div`
  margin-left: 180px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  width: 150px;
  height: 40px;
  margin: 15px 0;
  font-size: 16px;
  border: none;
  background: #000000;
  color: #ffffff;

  &:hover {
    opacity: 0.7;
`;

const MyDelete: React.FC = () => {
  const { deleteUser, auth, logout } = useContext(UserContext) as UserContextValue;

  const handleOnClick = useCallback(() => {
    if (auth) {
      if (confirm('탈퇴하시겠습니까?')) {
        deleteUser(Number(auth.id));
        logout();
      }
    }
  }, [auth, deleteUser, logout]);

  return (
    <Container className='MyPage'>
      <Title text='탈퇴하기' />
      <MyMenu />
      <Button onClick={handleOnClick}>탈퇴하기</Button>
    </Container>
  );
};

MyDelete.displayName = 'MyDelete';
export default MyDelete;
