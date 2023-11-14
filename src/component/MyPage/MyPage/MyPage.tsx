import MyMenu from '../MyMenu/MyMenu';
import React, { useContext, useState } from 'react';
import { UserContext, UserContextValue } from '../../../context';
import { Title } from '../../Common';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  margin-left: 220px;
`;

const Button = styled.button`
  width: 250px;
  height: 37px;
  margin: 15px 0;
  font-size: 15px;
  border: none;
  background: #000000;
  color: #ffffff;

  &:hover {
    opacity: 0.7;
`;

const Item = styled.div`
  display: block;
  margin: 15px 0;

  div {
    float: left;
    width: 120px;
  }

  p {
    color: #051169;
  }
`;

const MyPage: React.FC = () => {
  const { auth } = useContext(UserContext) as UserContextValue;

  const navigate = useNavigate();

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const clickModal = useCallback(() => {
    setIsOpenModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpenModal(false);
  }, []);

  const handleClick = useCallback(() => {
    navigate('/myPwdCheck');
  }, [navigate]);

  return (
    <Container className='MyPage'>
      <Title text='내 정보' />
      <MyMenu />
      {auth && (
        <>
          <Item>
            <div>아이디</div>
            <p>{auth.id}</p>
          </Item>
          <Item>
            <div>이름</div>
            <p>{auth.name}</p>
          </Item>
          <Item>
            <div>이메일</div>
            <p>{auth.email}</p>
          </Item>
          <Item>
            <div>전화번호</div>
            <p>{auth.phone}</p>
          </Item>
          <Item>
            <div>회원유형</div>
            <p>{auth.status}</p>
          </Item>
        </>
      )}
      <Button onClick={handleClick}>내 정보 수정</Button>
    </Container>
  );
};

MyPage.displayName = 'MyPage';
export default MyPage;
