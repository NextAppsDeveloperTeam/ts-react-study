import MyMenu from '../MyMenu/MyMenu';
import React, { useContext, useState } from 'react';
import { UserContext, UserContextValue } from '../../../context';
import { Form, FormContextProvider, FormEmail, FormPhone, FormRadioGroup, FormText, Title } from '../../Common';
import styled from 'styled-components';
import { UserStatus } from '../../../@types';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  margin-left: 230px;
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
  const { userList, updateInfo, auth } = useContext(UserContext) as UserContextValue;

  const navigate = useNavigate();

  const [name, setName] = useState(auth ? auth.name : '');
  const [email, setEmail] = useState(auth ? auth.email : '');
  const [phone, setPhone] = useState(auth ? auth.phone : '');
  const [status, setStatus] = useState<UserStatus>(auth ? auth.status : UserStatus.User);

  const chkEmail = useMemo(() => {
    return userList.map((user) => user.email);
  }, [userList]);

  const handleChkEmailValidate = useCallback(
    (value: string) => {
      return auth && auth.email !== value && chkEmail.includes(value) ? '이미 존재하는 이메일입니다.' : true;
    },
    [auth, chkEmail]
  );

  const handleSubmit = useCallback(() => {
    updateInfo(name, email, phone, status);
    alert('회원정보 수정이 완료되었습니다');
    navigate('/myPage');
  }, [email, name, navigate, phone, status, updateInfo]);

  return (
    <Container className='MyPage'>
      <Title text='내 정보 수정' />
      <MyMenu />
      <FormContextProvider>
        <Form onSubmit={handleSubmit}>
          {auth && (
            <>
              <FormText label='Name' name='name' value={name} onChange={setName} required />
              <FormEmail
                label='Email'
                name='email'
                value={email}
                onChange={setEmail}
                onValidate={handleChkEmailValidate}
                required
              />
              <FormPhone label='Phone' name='phone' value={phone} onChange={setPhone} required />
              <FormRadioGroup
                label='Status'
                name='status'
                items={[
                  { label: '회원', value: UserStatus.User },
                  { label: '관리자', value: UserStatus.Admin },
                ]}
                value={status}
                onChange={(value) => setStatus(value)}
                required
              />
            </>
          )}
          <Button>수정하기</Button>
        </Form>
      </FormContextProvider>
    </Container>
  );
};

MyInfoUpdate.displayName = 'MyInfoUpdate';
export default MyInfoUpdate;
