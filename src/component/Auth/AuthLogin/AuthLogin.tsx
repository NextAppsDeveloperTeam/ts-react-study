import * as React from 'react';
import {Button, Container, Form, Input, InputBox, Label} from '../../style';
import {useState} from "react";

const AuthLogin: React.FC = () => {

  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginClick = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      alert('이메일을 입력해주세요');
      inputEmailRef.current?.focus();
    } else if (!password) {
      alert('비밀번호를 입력해주세요');
      inputPasswordRef.current?.focus();
    }
    alert('~님 반갑습니다');
    setEmail('');
    setPassword('');
  }, [email, password]);

  return (
    <Container className='AuthLogin'>
      <Form>
        <InputBox>
          <Label htmlFor='email'>이메일</Label>
          <Input
              ref={inputEmailRef}
              type='text'
              id='email'
              value={email}
              placeholder='text00@email.com'
              onChange={(e) => setEmail(e.target.value)}
          />
        </InputBox>
        <InputBox>
          <Label htmlFor='password'>비밀번호</Label>
          <Input
              ref={inputPasswordRef}
              type='password'
              id='password'
              value={password}
              placeholder='비밀번호를 입력해주세요'
              onChange={(e) => setPassword(e.target.value)}
          />
        </InputBox>
        <Button type='submit' onClick={handleLoginClick}>
          로그인
        </Button>
      </Form>
    </Container>
  );
};
export default AuthLogin;
