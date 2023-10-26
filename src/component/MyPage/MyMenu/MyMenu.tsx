import React from 'react';
import {useNavigate} from "react-router-dom";
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 80px;
  bottom: 0;
  width: 180px;
  background: #3d3d3d;
  text-align: center;

  ul {
    line-height: 70px;

    a {
      display: block;
      color: #dedede;
    }

    :hover {
      background: #9d9d9d;
      color: #000000;
    }
  }
`;

const MyMenu: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Container className='MyMenu'>
      <nav>
        <ul>
          <li>
            <a onClick={() => navigate('/myPage')}>회원정보</a>
          </li>
          <li>
            <a onClick={() => navigate('/myPwdChange')}>비밀번호 변경</a>
          </li>
          <li>
            <a href='#'>탈퇴하기</a>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

MyMenu.displayName = 'Header';
export default MyMenu;
