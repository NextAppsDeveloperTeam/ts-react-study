import React, { useContext, useEffect, useState } from 'react';
import { Form, FormCommands, FormEmail, FormName, FormPassword, FormPhone, FormRadioGroup, Title } from '../../Common';
import FormContextProvider from '../../Common/Form/FormContextProvider';
import { UserContext, UserContextValue } from '../../../context';
import { User, UserStatus } from '../../../@types';
import { useNavigate } from 'react-router-dom';
import { Button, Container, StyledLoginText } from './AuthReg.style';

const AuthReg = () => {
  const { addUser, userList } = useContext(UserContext) as UserContextValue;

  const navigate = useNavigate();

  const [password, setPassword] = useState('');

  const formCommandsRef = useRef<FormCommands>(null);

  useEffect(() => {
    setTimeout(() => {
      if (formCommandsRef.current) {
        formCommandsRef.current.focus('name');
      }
    }, 1);
  }, []);

  const chkEmail = useMemo(() => {
    return userList.map((user) => user.email);
  }, [userList]);

  const handleChkEmailValidate = useCallback(
    (value: string) => {
      return chkEmail.includes(value) ? '이미 존재하는 이메일입니다.' : true;
    },
    [chkEmail]
  );

  const handleChkPwdValidate = useCallback(
    (value?: string) => {
      return password === value ? true : '비밀번호가 일치하지 않습니다.';
    },
    [password]
  );

  const handleSubmit = useCallback(
    (value: User) => {
      addUser(value);
      alert('회원가입이 완료되었습니다');
      navigate('/login');
    },
    [addUser, navigate]
  );

  return (
    <>
      <Title text='회원가입'></Title>
      <Container>
        <FormContextProvider>
          <Form ref={formCommandsRef} onSubmit={handleSubmit}>
            <FormName label='Name' name='name' placeholder='텍스트를 입력해주세요' required />
            <FormEmail
              label='Email'
              name='email'
              placeholder='이메일을 입력해주세요'
              onValidate={handleChkEmailValidate}
              required
            />
            <FormPhone label='Phone' name='phone' placeholder='전화번호를 입력해주세요' required />
            <FormPassword
              label='Password'
              name='password'
              placeholder='비밀번호를 입력해주세요'
              helperText='영문, 숫자, 특수문자 포함 8~16자'
              value={password}
              onChange={setPassword}
              required
            />
            <FormPassword
              label='Password Check'
              name='chkPwd'
              placeholder='비밀번호를 한 번 더 입력해주세요'
              onValidate={handleChkPwdValidate}
              required
            />
            <FormRadioGroup
              label='Status'
              name='status'
              items={[
                { label: '회원', value: UserStatus.User },
                { label: '관리자', value: UserStatus.Admin },
              ]}
              required
            />
            <Button>가입하기</Button>
            <StyledLoginText>
              이미 계정이 있으신가요? <a href='/login'>로그인하기</a>
            </StyledLoginText>
          </Form>
        </FormContextProvider>
      </Container>
    </>
  );
};
export default AuthReg;
