import React, { useContext, useEffect, useState } from 'react';
import { Form, FormCommands, FormEmail, FormPassword, Title } from '../../Common';
import FormContextProvider from '../../Common/Form/FormContextProvider';
import { UserContext, UserContextValue } from '../../../context';
import styled from 'styled-components';
import { User } from '../../../@types';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
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
    background: #6c6c6c;
`;

const StyledJoinText = styled.p`
  font-size: 13px;
  text-align: center;
  margin-top: 10px;

  a {
    text-decoration: none;

    &:hover {
      color: mediumpurple;
    }
  }
`;

const AuthLogin = () => {
  const { userList } = useContext(UserContext) as UserContextValue;

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const formCommandsRef = useRef<FormCommands>(null);

  useEffect(() => {
    setTimeout(() => {
      if (formCommandsRef.current) {
        formCommandsRef.current.focus('email');
      }
    }, 1);
  }, []);

  const chkValidate = useMemo(() => {
    return userList.find((user: User) => user.email === email && user.password === password);
  }, [email, password, userList]);

  const handleChkEmailValidate = useCallback(() => {
    return chkValidate ? true : '';
  }, [chkValidate]);

  const handleChkPwdValidate = useCallback(() => {
    return chkValidate ? true : '이메일 또는 비밀번호가 맞지 않습니다.';
  }, [chkValidate]);

  const handleSubmit = useCallback(() => {
    userList.find((user: User) => user.email === email && alert(`${user.name}님 반갑습니다.`));
    sessionStorage.setItem('isAuthenticated', 'true');
    navigate('/');
  }, [email, navigate, userList]);

  return (
    <>
      <Title text='로그인'></Title>
      <Container>
        <FormContextProvider>
          <Form ref={formCommandsRef} onSubmit={handleSubmit}>
            <FormEmail
              label='Email'
              name='email'
              placeholder='이메일을 입력해주세요'
              value={email}
              onChange={setEmail}
              onValidate={handleChkEmailValidate}
              required
            />
            <FormPassword
              label='Password'
              name='password'
              placeholder='비밀번호를 입력해주세요'
              helperText='영문, 숫자, 특수문자 포함 8~16자'
              value={password}
              onChange={setPassword}
              onValidate={handleChkPwdValidate}
              required
            />
            <Button>로그인</Button>
            <StyledJoinText>계정이 없으신가요? <a href='/join'>회원가입하기</a></StyledJoinText>
          </Form>
        </FormContextProvider>
      </Container>
    </>
  );
};
export default AuthLogin;
