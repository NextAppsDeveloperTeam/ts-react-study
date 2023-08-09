import React from 'react';
import { TodoHomeProps as Props } from './TodoHome.types';

const TodoHome: React.FC<Props> = () => {
  return (
    <div>
      <h1>TodoHome</h1>
    </div>
  );
};

TodoHome.displayName = 'TodoHome';

export default TodoHome;
