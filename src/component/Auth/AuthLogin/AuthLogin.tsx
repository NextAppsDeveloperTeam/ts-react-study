import * as React from 'react';
import {Button, Container, Form, Input, InputBox, Label} from '../../style';

const AuthLogin: React.FC = () => {
  return (
    <Container className='AuthLogin'>
      <Form>
        <InputBox>
          <Label htmlFor='email'>이메일</Label>
          <Input type='text' id='email' />
        </InputBox>
        <InputBox>
          <Label htmlFor='password'>비밀번호</Label>
          <Input type='password' id='password' />
        </InputBox>
        <Button type='submit'>로그인</Button>
      </Form>
    </Container>
  );
};
export default AuthLogin;
