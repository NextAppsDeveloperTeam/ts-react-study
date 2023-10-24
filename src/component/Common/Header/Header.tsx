import React, {useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import './Header.scss';
import {UserContext, UserContextValue} from "../../../context";
import {User} from "../../../@types";

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
  const { userList } = useContext(UserContext) as UserContextValue;

  const [isAuthenticated, setIsAuthenticated] = useState<string | null>(sessionStorage.getItem('isAuthenticated'));
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
      {isAuthenticated === null || isAuthenticated === 'false' ? (
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
      ) : (
        <div>
          <AuthDiv>
            <AuthA>
              {userList.filter((users: User) => users.id===1)
                  .map((user: User) => (
                      `${user.name}님`
                  ))}
            </AuthA>
            <AuthA
              onClick={() => {
                setIsAuthenticated('false');
                sessionStorage.setItem('isAuthenticated', 'false');
                navigate('/login');
              }}
            >
              로그아웃
            </AuthA>
          </AuthDiv>
        </div>
      )}
    </Container>
  );
};

Header.displayName = 'Header';
export default Header;
