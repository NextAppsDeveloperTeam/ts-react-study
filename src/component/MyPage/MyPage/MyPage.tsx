import MyMenu from '../MyMenu/MyMenu';
import React, { useContext, useState } from 'react';
import { UserContext, UserContextValue } from '../../../context';
import { Title } from '../../Common';
import styled from 'styled-components';
import MyPwdCheck from '../MyPwdCheck';

const Container = styled.div`
  margin-left: 230px;
`;

const Button = styled.button`
  width: 250px;
  height: 37px;
  margin: 15px 20px;
  font-size: 15px;
  border: none;
  background: #000000;
  color: #ffffff;

  &:hover {
    opacity: 0.7;
`;

const Item = styled.div`
  display: block;
  margin: 15px 20px;

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

  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const clickModal = useCallback(() => {
    setIsOpenModal(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpenModal(false);
  }, []);

  return (
    <Container className='MyPage'>
      <Title text='내 정보' />
      <MyMenu />
      {auth && (
        <>
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
      <Button onClick={clickModal}>내 정보 수정</Button>
      {isOpenModal && <MyPwdCheck onCLick={closeModal}/>}
    </Container>
  );
};

MyPage.displayName = 'MyPage';
export default MyPage;
