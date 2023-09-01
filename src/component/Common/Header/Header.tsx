import './Header.scss';
import React from "react";
import {useNavigate} from "react-router-dom";

const Header : React.FC = () => {
    const navigate = useNavigate();
  return (
    <div className='Header'>
      <header>
          <div className='header'>
              <nav>
                  <ul>
                      <li><a onClick={() => navigate('/')}>HOME</a></li>
                      <li><a onClick={() => navigate('/myPage')}>MY</a></li>
                      <li><a onClick={() => navigate('/userList')}>회원관리</a></li>
                  </ul>
              </nav>
              <div>
              <ul>
                  <li><a onClick={() => navigate('/login')}>로그인</a></li>
                  <li><a onClick={() => navigate('/join')}>회원가입</a></li>
              </ul>
              </div>
          </div>
      </header>
    </div>
  );
};

Header.displayName = 'Header';
export default Header;
