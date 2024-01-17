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
    line-height: 80px;
    width: 600px;
    text-align: center;

    li {
      float: left;
      width: 25%;

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
  ul {
    line-height: 80px;
    width: 170px;
    text-align: center;

    li {
      width: 50%;
      float: left;
      color: #cfcfcf;
      font-size: 14px;
      cursor: pointer;

      &:hover {
        color: #879fbe;
      }
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
              <a onClick={() => navigate('/boardList#p=1')}>자유게시판</a>
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
        <AuthStyle>
          <ul>
            <li style={{ color: 'white' }}>{auth.name}님</li>
            <li
              onClick={() => {
                logout();
                navigate('/login');
              }}
            >
              로그아웃
            </li>
          </ul>
        </AuthStyle>
      ) : (
        <AuthStyle>
          <ul>
            <li
              onClick={() => {
                navigate('/login');
              }}
            >
              로그인
            </li>
            <li
              onClick={() => {
                navigate('/join');
              }}
            >
              회원가입
            </li>
          </ul>
        </AuthStyle>
      )}
    </Container>
  );
};

Header.displayName = 'Header';
export default Header;
