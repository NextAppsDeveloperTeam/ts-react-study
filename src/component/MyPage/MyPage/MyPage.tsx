import MyMenu from "../MyMenu/MyMenu";
import React, { useContext } from 'react';
import { UserContext, UserContextValue } from '../../../context';
import { User } from '../../../@types';
import MyInfo from "../MyInfo";
import {Title} from "../../Common";
import styled from "styled-components";

const Container = styled.div`
  margin-left: 180px;
`;

const MyPage: React.FC = () => {
  const { userList, auth } = useContext(UserContext) as UserContextValue;

  return (
    <Container className='MyPage'>
      <Title text='내 정보' />
      <MyMenu />
      {userList.filter((user: User) => user.id===auth?.id)
          .map((user: User) => (
        <MyInfo key={user.id} user={user} />
      ))}
    </Container>
  );
};

MyPage.displayName = 'MyPage';
export default MyPage;
