import React, { useContext, useEffect, useState } from 'react';
import {
  Form,
  FormChkPwd,
  FormCommands,
  FormEmail,
  FormNumber,
  FormPassword,
  FormPhone,
  FormStatus,
  FormText,
} from '../Common';
import FormContextProvider from '../Common/Form/FormContextProvider';
import { UserContext, UserContextValue } from '../../context';
import styled from 'styled-components';
import { User, UserStatus } from '../../@types';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const Button = styled.button`
  margin-top: 20px;
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


  const handleChkPwdValidate = useCallback((value: string) => {
    return password === value ? true : '비밀번호가 일치하지 않습니다.'
  }, [password])

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
    <Container>
      <FormContextProvider>
        <Form ref={formCommandsRef} onSubmit={handleSubmit}>
          <FormText
            label='Name'
            name='name'
            placeholder='텍스트를 입력해주세요'
            helperText='텍스트를 입력해주세요'
            value={name}
            onChange={setName}
            required
          />
          <FormEmail
            label='Email'
            name='email'
            placeholder='이메일을 입력해주세요'
            helperText='이메일을 입력해주세요'
            errorText='이메일을 형식에 맞게 입력해주세요'
            checkText='이미 존재하는 이메일입니다'
            value={email}
            onChange={setEmail}
            required
          />
          <FormPhone
            label='Phone'
            name='phone'
            placeholder='전화번호를 입력해주세요'
            helperText='전화번호를 입력해주세요'
            errorText='전화번호는 9~11자입니다'
            value={phone}
            onChange={setPhone}
            required
          />
          <FormPassword
            label='Password'
            name='password'
            placeholder='비밀번호를 입력해주세요'
            helperText='비밀번호를 입력해주세요'
            errorText='비밀번호를 형식에 맞게 입력해주세요(영문, 숫자, 특수문자 포함 8~16자)'
            value={password}
            onChange={setPassword}
            required
          />

          <FormPassword
              label='Password Check'
              name='chkPwd'
              placeholder='비밀번호를 한 번 더 입력해주세요'
              helperText='비밀번호를 한 번 더 입력해주세요'
              errorText='비밀번호가 일치하지 않습니다'
              value={chkPwd}
              onChange={setChkPwd}
              onValidate={handleChkPwdValidate}
              required
          />
          <FormChkPwd
            label='Password Check'
            name='chkPwd'
            placeholder='비밀번호를 한 번 더 입력해주세요'
            helperText='비밀번호를 한 번 더 입력해주세요'
            errorText='비밀번호가 일치하지 않습니다'
            value={chkPwd}
            onChange={setChkPwd}
            required
          />
          <FormNumber
            label='Number'
            name='number'
            placeholder='입력해주세요'
            helperText='입력해주세요'
            value={num}
            onChange={setNum}
          />
          <FormStatus
            label='Status'
            name='status'
            helperText='선택해주세요'
            value={status}
            onChange={() => setStatus(UserStatus.User)}
            labelText='회원'
            // checked={status === UserStatus.User}
            required
          />
          <FormStatus name='status' value={status} onChange={() => setStatus(UserStatus.Admin)} labelText='관리자' />
          <Button>Submit</Button>
        </Form>
      </FormContextProvider>
    </Container>
  );
};

export default Home;
