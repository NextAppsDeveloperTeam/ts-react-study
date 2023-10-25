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

const AuthStyle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 80px;
`;

const AuthDiv = styled.div`
  color: #cfcfcf;
  font-size: 14px;
  cursor: pointer;
  padding: 0 15px;

  &:hover {
    color: #879fbe;
  }
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
            {auth.status === UserStatus.Admin && (
              <NavLi>
                <NavA onClick={() => navigate('/userList')}>회원관리</NavA>
              </NavLi>
            )}
          </>
        )}
      </NavUl>
      {auth ? (
        <div>
          <AuthStyle>
            <div style={{ color: 'white' }}>{auth.name}님</div>
            <AuthDiv
              onClick={() => {
                logout();
                navigate('/login');
              }}
            >
              로그아웃
            </AuthDiv>
          </AuthStyle>
        </div>
      ) : (
        <AuthStyle>
          <AuthDiv
            onClick={() => {
              navigate('/login');
            }}
          >
            로그인
          </AuthDiv>
          <AuthDiv
            onClick={() => {
              navigate('/join');
            }}
          >
            회원가입
          </AuthDiv>
        </AuthStyle>
      )}
    </Container>
  );
};

Header.displayName = 'Header';
export default Header;
