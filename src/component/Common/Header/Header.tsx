import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import './Header.scss';

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
  margin: 40px;
`;

const NavA = styled.a`
  color: #ffffff;
  font-size: 18px;
  cursor: pointer;

  &:hover {
    color: #b9d8ff;
  }
`;

const AuthUl = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 80px;
`;

const AuthLi = styled.li`
  padding-right: 30px;
`;

const AuthA = styled.a`
  color: #cfcfcf;
  font-size: 14px;
  cursor: pointer;
`;

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container className='Header'>
      <NavUl>
        <NavLi>
          <NavA onClick={() => navigate('/')}>HOME</NavA>
        </NavLi>
        <NavLi>
          <NavA onClick={() => navigate('/myPage')}>MY</NavA>
        </NavLi>
        <NavLi>
          <NavA onClick={() => navigate('/userList')}>회원관리</NavA>
        </NavLi>
      </NavUl>
      <AuthUl>
        <AuthLi>
          <AuthA onClick={() => navigate('/login')}>로그인</AuthA>
        </AuthLi>
        <AuthLi>
          <AuthA onClick={() => navigate('/join')}>회원가입</AuthA>
        </AuthLi>
      </AuthUl>
    </Container>
  );
};

Header.displayName = 'Header';
export default Header;
