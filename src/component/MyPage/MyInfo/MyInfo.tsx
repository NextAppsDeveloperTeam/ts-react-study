import React from 'react';
import { User } from '../../../@types';
import styled from 'styled-components';

type Props = {
  user: User;
  deleteUser?: (id: number) => void;
};

const StyleUserItem = styled.div`
  margin: 20px;
`;

const Item = styled.div`
  display: block;
  margin: 15px 0;

  div {
    float: left;
    width: 120px;
  }

  p {
    color: #051169;
  }
`;

const MyInfo: React.FC<Props> = ({ user }) => {
  return (
    <StyleUserItem>
      <Item>
        <div>아이디</div>
        <p>{user.id}</p>
      </Item>
      <Item>
        <div>이름</div>
        <p>{user.name}</p>
      </Item>
      <Item>
        <div>이메일</div>
        <p>{user.email}</p>
      </Item>
      <Item>
        <div>전화번호</div>
        <p>{user.phone}</p>
      </Item>
      <Item>
        <div>회원유형</div>
        <p>{user.status}</p>
      </Item>
    </StyleUserItem>
  );
};
export default MyInfo;
