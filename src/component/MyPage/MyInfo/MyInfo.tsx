import React from 'react';
import { User } from '../../../@types';
import styled from "styled-components";

type Props = {
  user: User;
  deleteUser?: (id: number) => void;
};

const StyleUserItem = styled.div`
  margin: 20px;
`;

const MyInfo: React.FC<Props> = ({ user }) => {
  return (
    <StyleUserItem>
      <div className='UserItem_list'>
        <span className='item'>아이디: {user.id}</span>
        <br />
        <span className='item'>이름: {user.name}</span>
        <br />
        <span className='item'>이메일: {user.email}</span>
        <br />
        <span className='item'>전화번호: {user.phone}</span>
        <br />
        <span className='item'>회원유형: {user.status}</span>
        <br />
        <span className='item'>비밀번호: {user.password}</span>
      </div>
    </StyleUserItem>
  );
};
export default MyInfo;
