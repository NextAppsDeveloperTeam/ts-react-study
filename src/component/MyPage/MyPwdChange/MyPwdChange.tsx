import MyMenu from "../MyMenu/MyMenu";
import React from 'react';
// import { UserContext, UserContextValue } from '../../../context';
// import { User } from '../../../@types';
import {Title} from "../../Common";
import styled from "styled-components";

const Container = styled.div`
  margin-left: 180px;
`;

const MyPwdChange: React.FC = () => {
  // const { userList, auth } = useContext(UserContext) as UserContextValue;

  return (
      <Container className='MyPage'>
        <Title text='비밀번호 변경' />
        <MyMenu />

      </Container>
  );
};

MyPwdChange.displayName = 'MyPwdChange';
export default MyPwdChange;
