// import MyMenu from "../MyMenu/MyMenu";
import React, { useContext } from 'react';
import { UserContext, UserContextValue } from '../../../context';
import { User } from '../../../@types';
import UserItem from '../../Auth/UserItem';
import {Title} from "../../Common";

const MyPage: React.FC = () => {
  const { userList, auth } = useContext(UserContext) as UserContextValue;

  return (
    <div className='MyPage'>
      <Title text='내 정보' />
      {/*<MyMenu />*/}
      {userList.filter((user: User) => user.id===auth?.id)
          .map((user: User) => (
        <UserItem key={user.id} user={user} />
      ))}
    </div>
  );
};

MyPage.displayName = 'MyPage';
export default MyPage;
