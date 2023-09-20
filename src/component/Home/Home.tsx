import React, {useContext, useEffect, useState} from 'react';
import { Form, FormChkPwd, FormCommands, FormEmail, FormNumber, FormPassword, FormPhone, FormText } from '../Common';
import FormContextProvider from '../Common/Form/FormContextProvider';
import {UserContext, UserContextValue} from "../../context";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const Button = styled.button`
  margin: 20px;
  padding: 10px 50px;
  font-size: 16px;
  border: none;
  background: #000000;
  color: #ffffff;

  &:hover {
    background: #6c6c6c;
`;

const Home = () => {
  const { userList } = useContext(UserContext) as UserContextValue;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [num, setNum] = useState<number | undefined>(0);
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [chkPwd, setChkPwd] = useState('');

  const formCommandsRef = useRef<FormCommands>(null);

  const emailRegEx = useMemo(() => {
    return /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
  }, []);
  const passwordRegEx = useMemo(() => {
    return /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,16}$/;
  }, []);
  const chkEmail = useMemo(() => {
    return userList.map((user) => user.email);
  }, [userList]);

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

  const handleSubmit = useCallback((value: Dict) => {
    if (!emailRegEx.test(email)) {
      alert('이메일을 형식에 맞게 입력해주세요');
    } else if(chkEmail.includes(email)) {
      alert('이미 존재하는 이메일입니다')
    } else if (!passwordRegEx.test(password)) {
      alert('비밀번호를 형식에 맞게 입력해주세요\n(영문, 숫자, 특수문자 포함 8~16자)');
    } else {
      ll(value);
      // addUser(value);
      alert('회원가입이 완료되었습니다');
    }
  }, [chkEmail, email, emailRegEx, password, passwordRegEx]);

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
            value={email}
            onChange={setEmail}
            required
          />
          <FormPhone
            label='Phone'
            name='phone'
            placeholder='전화번호를 입력해주세요'
            helperText='전화번호를 입력해주세요'
            value={phone}
            onChange={setPhone}
            required
          />
          <FormPassword
            label='Password'
            name='password'
            placeholder='비밀번호를 입력해주세요'
            helperText='비밀번호를 입력해주세요'
            value={password}
            onChange={setPassword}
            required
          />
          <FormChkPwd
            label='Check Password'
            name='chkPwd'
            placeholder='비밀번호를 한 번 더 입력해주세요'
            helperText='비밀번호를 한 번 더 입력해주세요'
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
          <Button>Submit</Button>
        </Form>
      </FormContextProvider>
    </Container>
  );
};

export default Home;
