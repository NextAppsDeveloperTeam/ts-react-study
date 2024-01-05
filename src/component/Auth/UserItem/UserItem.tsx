import React, { useContext } from 'react';
import { User } from '../../../@types';
import { UserContext, UserContextValue } from '../../../context';
import { Button, StyleUserItem } from './UserItem.style';

type Props = {
  user: User;
  deleteUser?: (id: number) => void;
};

const UserItem: React.FC<Props> = ({ user, deleteUser }) => {
  const { auth, logout } = useContext(UserContext) as UserContextValue;

  return (
    <StyleUserItem>
      <div className='userItem'>
        <div>아이디</div>
        <p>{user.id}</p>
      </div>
      <div className='userItem'>
        <div>이름</div>
        <p>{user.name}</p>
      </div>
      <div className='userItem'>
        <div>이메일</div>
        <p>{user.email}</p>
      </div>
      <div className='userItem'>
        <div>전화번호</div>
        <p>{user.phone}</p>
      </div>
      <div className='userItem'>
        <div>회원유형</div>
        <p>{user.status}</p>
      </div>
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
