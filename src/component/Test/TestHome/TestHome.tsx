import React from 'react';
import { TestHomeProps as Props } from './TestHome.types';

const TestHome: React.FC<Props> = () => {
  return (
    <div>
      <h1>TestHome</h1>
    </div>
  );
};

TestHome.displayName = 'TestHome';

export default TestHome;
