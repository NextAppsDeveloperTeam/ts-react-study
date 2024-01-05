import { useContext } from 'react';
import { UserContext, UserContextValue } from '../../../context';
import { User } from '../../../@types';
import UserItem from '../UserItem/UserItem';
import { Title } from '../../Common';
import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  max-width: 1000px;
`;

const UserList = () => {
  const { userList, deleteUser } = useContext(UserContext) as UserContextValue;
  return (
    <Container>
      <Title text='회원관리' />
      {userList.map((user: User) => (
        <div key={user.id}>
          <UserItem deleteUser={deleteUser} user={user} />
          <hr />
        </div>
      ))}
    </Container>
  );
};

export default UserList;
