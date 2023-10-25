import { useContext } from 'react';
import { UserContext, UserContextValue } from '../../../context';
import { User } from '../../../@types';
import UserItem from '../UserItem/UserItem';
import { Title } from '../../Common';

const UserList = () => {
  const { userList, deleteUser } = useContext(UserContext) as UserContextValue;
  return (
    <>
      <Title text='회원관리' />
      {userList.map((user: User) => (
        <>
          <UserItem key={user.id} deleteUser={deleteUser} user={user} />
          <hr />
        </>
      ))}
    </>
  );
};

export default UserList;
