import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import './Header.scss';
import { UserContext, UserContextValue } from '../../../context';

const Container = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  background-color: #000000;
`;

const NavUl = styled.ul`
  margin-top: 0;
  line-height: 80px;
`;

const NavLi = styled.li`
  float: left;
  margin: 35px;
`;

const NavA = styled.a`
  color: #ffffff;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: #b9d8ff;
  }
`;

const AuthDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 80px;
`;

const AuthA = styled.div`
  color: #cfcfcf;
  font-size: 14px;
  cursor: pointer;
  padding: 0 15px;
`;

const Header: React.FC = () => {
  const navigate = useNavigate();

  const { auth, logout } = useContext(UserContext) as UserContextValue;

  return (
    <Container className='Header'>
      <NavUl>
        <NavLi>
          <NavA onClick={() => navigate('/')}>HOME</NavA>
        </NavLi>
        {auth && (
          <>
            <NavLi>
              <NavA onClick={() => navigate('/myPage')}>MY</NavA>
            </NavLi>
            <NavLi>
              <NavA onClick={() => navigate('/userList')}>회원관리</NavA>
            </NavLi>
          </>
        )}
      </NavUl>
      {auth ? (
        <div>
          <AuthDiv>
            <div style={{ color: 'white' }}>{auth.name}님</div>
            <AuthA
              onClick={() => {
                logout();
                navigate('/login');
              }}
            >
              로그아웃
            </AuthA>
          </AuthDiv>
        </div>
      ) : (
        <AuthDiv>
          <AuthA
            onClick={() => {
              navigate('/login');
            }}
          >
            로그인
          </AuthA>
          <AuthA
            onClick={() => {
              navigate('/join');
            }}
          >
            회원가입
          </AuthA>
        </AuthDiv>
      )}
    </Container>
  );
};

Header.displayName = 'Header';
export default Header;
