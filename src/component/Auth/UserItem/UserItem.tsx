import React, { useContext } from 'react';
import { User } from '../../../@types';
import styled from 'styled-components';
import { UserContext, UserContextValue } from '../../../context';

type Props = {
  user: User;
  deleteUser?: (id: number) => void;
};

const StyleUserItem = styled.div`
  margin: 20px;
`;

const Item = styled.span`
  display: flex;
  margin: 5px 0;

  div {
    width: 80px;
  }

  p {
    color: #051169;
  }
`;

const Button = styled.button`
  width: 80px;
  height: 35px;
  margin: 15px 0;
  font-size: 14px;
  border: none;
  background: #282828;
  color: #ffffff;

  &:hover {
    opacity: 0.7;
`;

const UserItem: React.FC<Props> = ({ user, deleteUser }) => {
  const { auth, logout } = useContext(UserContext) as UserContextValue;

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
      {deleteUser && (
        <Button
          onClick={() => {
            if (confirm('삭제하시겠습니까?')) {
              deleteUser(user.id);
              if (auth && user.id === auth.id) {
                logout();
              }
            }
          }}
          className='UserItem_button'
        >
          삭제
        </Button>
      )}
    </StyleUserItem>
  );
};
export default UserItem;
