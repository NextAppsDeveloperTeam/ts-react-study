import React, { useContext, useEffect, useState } from 'react';
import {
  Form,
  FormCommands,
  FormEmail,
  FormNumber,
  FormPassword,
  FormPhone,
  FormRadioGroup,
  FormText,
  Title,
} from '../Common';
import FormContextProvider from '../Common/Form/FormContextProvider';
import { UserContext, UserContextValue } from '../../context';
import styled from 'styled-components';
import { User, UserStatus } from '../../@types';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  margin-top: 10px;
  padding: 10px 40px;
  font-size: 16px;
  border: none;
  background: #000000;
  color: #ffffff;

  &:hover {
    background: #6c6c6c;
`;

const Home = () => {
  const { addUser } = useContext(UserContext) as UserContextValue;

  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [num, setNum] = useState<number | undefined>(0);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [chkPwd, setChkPwd] = useState('');
  const [status, setStatus] = useState<UserStatus>(UserStatus.User);

  const formCommandsRef = useRef<FormCommands>(null);

  useEffect(() => {
    setTimeout(() => {
      if (formCommandsRef.current) {
        formCommandsRef.current.focus('name');
      }
    }, 1);
  }, []);

  useEffect(() => {
    if (name) {
      setName(name.replace(/^ | $/g, ''));
    }
    if (phone) {
      setPhone(phone.replace(/[^0-9]/g, '').replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, '$1-$2-$3'));
    }
  }, [name, phone]);

  const handleChkPwdValidate = useCallback(
    (value?: string) => {
      return password === value ? true : '비밀번호가 일치하지 않습니다.';
    },
    [password]
  );

  const handleSubmit = useCallback(
    (value: User) => {
      ll(value);
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
            <FormText
              label='Name'
              name='name'
              placeholder='텍스트를 입력해주세요'
              value={name}
              onChange={setName}
              required
            />
            <FormEmail
              label='Email'
              name='email'
              placeholder='이메일을 입력해주세요'
              value={email}
              onChange={setEmail}
              required
            />
            <FormPhone
              label='Phone'
              name='phone'
              placeholder='전화번호를 입력해주세요'
              value={phone}
              onChange={setPhone}
              required
            />
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
              value={chkPwd}
              onChange={setChkPwd}
              onValidate={handleChkPwdValidate}
              required
            />
            <FormNumber label='Number' name='number' placeholder='입력해주세요' value={num} onChange={setNum} />
            <FormRadioGroup
              label='Status'
              name='status'
              items={[
                { label: '회원', value: UserStatus.User },
                { label: '관리자', value: UserStatus.Admin },
              ]}
              value={status}
              onChange={(v) => setStatus(v)}
              required
            />
            <Button>Submit</Button>
          </Form>
        </FormContextProvider>
      </Container>
    </>
  );
};

export default Home;
