import React from 'react';
import {useNavigate} from "react-router-dom";
import styled from 'styled-components';

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 230px;
  background: #3d3d3d;
  text-align: center;
  overflow: auto;

  ul {
    line-height: 70px;
    margin-top: 80px;

    a {
      display: block;
      color: #bdbdbd;
    }

    :hover {
      background: rgba(51, 51, 51, 0.69);
      color: #eeeeee;
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
            <a onClick={() => navigate('/myPage')}>내 정보</a>
          </li>
          <li>
            <a onClick={() => navigate('/myPwdChange')}>비밀번호 변경</a>
          </li>
          <li>
            <a onClick={() => navigate('/myDelete')}>탈퇴하기</a>
          </li>
        </ul>
      </nav>
    </Container>
  );
};

MyMenu.displayName = 'Header';
export default MyMenu;
