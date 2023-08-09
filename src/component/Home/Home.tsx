import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Home</h1>
      <div>
        <button onClick={() => navigate('/test')}>Test</button>
        &nbsp;<button onClick={() => navigate('/todo')}>TODO</button>
      </div>
    </div>
  );
};

export default Home;
