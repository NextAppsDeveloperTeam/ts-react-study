import React from 'react';
import { TestHomeProps as Props } from './TestHome.types';
import { UserList } from '../@types';

let _userId = 0;

const TestHome: React.FC<Props> = () => {
  const [userList, setUserList] = useState<UserList>([]);

  return (
    <div>
      <h1>TestHome</h1>
      <button
        onClick={() => {
          setUserList((old) => [...old, { id: ++_userId, name: 'asdf', status: 'ON' }]);
        }}
      >
        add
      </button>
      {userList.map((user) => (
        <div key={user.id}>
          {user.id} / {user.name} / {user.tel} / {user.status}
        </div>
      ))}
    </div>
  );
};

TestHome.displayName = 'TestHome';

export default TestHome;
