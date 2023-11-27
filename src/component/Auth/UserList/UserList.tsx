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
        <div key={user.id}>
          <UserItem deleteUser={deleteUser} user={user} />
          <hr />
        </div>
      ))}
    </>
  );
};

export default UserList;
