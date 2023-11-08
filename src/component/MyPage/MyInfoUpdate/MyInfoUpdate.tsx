import MyMenu from '../MyMenu/MyMenu';
import React, { useContext } from 'react';
import { UserContext, UserContextValue } from '../../../context';
import {
  Form,
  FormContextProvider,
  FormEmail,
  FormNumber,
  FormPhone,
  FormRadioGroup,
  FormText,
  Title,
} from '../../Common';
import styled from 'styled-components';
import { UserStatus } from '../../../@types';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  margin-left: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Button = styled.button`
  width: 280px;
  height: 40px;
  margin: 15px 0;
  font-size: 16px;
  border: none;
  background: #000000;
  color: #ffffff;

  &:hover {
    opacity: 0.7;
`;

const MyInfoUpdate: React.FC = () => {
  const { auth } = useContext(UserContext) as UserContextValue;

  const navigate = useNavigate();

  const handleSubmit = useCallback(() => {
    alert('회원정보 수정이 완료되었습니다');
    navigate('/myPage');
  }, [navigate]);

  return (
    <Container className='MyPage'>
      <Title text='내 정보 수정' />
      <MyMenu />
      <FormContextProvider>
        <Form onSubmit={handleSubmit}>
          {auth && (
            <>
              <FormNumber label='Id' name='id' value={auth.id} required readonly />
              <FormText label='Name' name='name' value={auth.name} required />
              <FormEmail label='Email' name='email' value={auth.email} required readonly />
              <FormPhone label='Phone' name='phone' value={auth.phone} required />
              <FormRadioGroup
                label='Status'
                name='status'
                items={[
                  { label: '회원', value: UserStatus.User },
                  { label: '관리자', value: UserStatus.Admin },
                ]}
                value={auth.status}
                required
              />
            </>
          )}
          <Button>내 정보 수정</Button>
        </Form>
      </FormContextProvider>
    </Container>
  );
};

MyInfoUpdate.displayName = 'MyInfoUpdate';
export default MyInfoUpdate;
