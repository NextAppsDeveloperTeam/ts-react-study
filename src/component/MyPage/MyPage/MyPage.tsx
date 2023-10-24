// import MyMenu from "../MyMenu/MyMenu";
import React, { useContext } from 'react';
import { UserContext, UserContextValue } from '../../../context';
import { User } from '../../../@types';
import UserItem from '../../Auth/UserItem';

const MyPage: React.FC = () => {
  const { userList } = useContext(UserContext) as UserContextValue;
  
  return (
    <div className='MyPage'>
      {/*<MyMenu />*/}
      {userList.filter((users: User) => users.id===1)
          .map((user: User) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

MyPage.displayName = 'MyPage';
export default MyPage;
