import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import './Header.scss';
import { UserContext, UserContextValue } from '../../../context';
import { UserStatus } from '../../../@types';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: #000000;
  position: relative;
  width: 100%;
  z-index: 999;

  ul {
    margin-top: 0;
    line-height: 80px;

    li {
      float: left;
      margin: 35px;

      a {
        color: #ffffff;
        font-size: 18px;
        cursor: pointer;

        &:hover {
          color: #b9d8ff;
        }
      }
    }
  }
`;

const AuthStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 80px;

  div {
    color: #cfcfcf;
    font-size: 14px;
    cursor: pointer;
    padding: 0 15px;

    &:hover {
      color: #879fbe;
    }
  }
`;

const Header: React.FC = () => {
  const navigate = useNavigate();

  const { auth, logout } = useContext(UserContext) as UserContextValue;

  return (
    <Container className='Header'>
      <ul>
        <li>
          <a onClick={() => navigate('/')}>HOME</a>
        </li>
        {auth && (
          <>
            <li>
              <a onClick={() => navigate('/myPage')}>MY</a>
            </li>
            <li>
              <a onClick={() => navigate('/board')}>자유게시판</a>
            </li>
            {auth.status === UserStatus.Admin && (
              <li>
                <a onClick={() => navigate('/userList')}>회원관리</a>
              </li>
            )}
          </>
        )}
      </ul>
      {auth ? (
        <div>
          <AuthStyle>
            <p style={{ color: 'white', paddingRight: '15px' }}>{auth.name}님</p>
            <div
              onClick={() => {
                logout();
                navigate('/login');
              }}
            >
              로그아웃
            </div>
          </AuthStyle>
        </div>
      ) : (
        <AuthStyle>
          <div
            onClick={() => {
              navigate('/login');
            }}
          >
            로그인
          </div>
          <div
            onClick={() => {
              navigate('/join');
            }}
          >
            회원가입
          </div>
        </AuthStyle>
      )}
    </Container>
  );
};

Header.displayName = 'Header';
export default Header;
