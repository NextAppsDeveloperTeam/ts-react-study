import MyMenu from '../MyMenu/MyMenu';
import React, {useContext, useEffect, useState} from 'react';
import { UserContext, UserContextValue } from '../../../context';
import { Form, FormCommands, FormContextProvider, FormPassword, Title } from '../../Common';
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";

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

const MyPwdChange: React.FC = () => {
  const { updateUser, auth } = useContext(UserContext) as UserContextValue;

  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [newPwd, setNewPwd] = useState('');

  const formCommandsRef = useRef<FormCommands>(null);

  useEffect(() => {
    setTimeout(() => {
      if (formCommandsRef.current) {
        formCommandsRef.current.focus('password');
      }
    }, 1);
  }, []);

  const handlePwdValidate = useCallback((value?: string) => {
    return auth?.password === value ? true : '비밀번호가 일치하지 않습니다.';
  }, [auth?.password]);

  const handleSamePwdValidate = useCallback((value?: string) => {
    return password === value ? '이전과 동일한 비밀번호는 사용할 수 없습니다.' : true;
  }, [password]);

  const handleChkPwdValidate = useCallback(
    (value?: string) => {
      return newPwd === value ? true : '비밀번호가 일치하지 않습니다.';
    },
    [newPwd]
  );

  const handleSubmit = useCallback(() => {
    updateUser(newPwd);
    alert('비밀번호 변경이 완료되었습니다');
    navigate('/myPage');
  }, [navigate, newPwd, updateUser]);

  return (
    <Container className='MyPage'>
      <Title text='비밀번호 변경' />
      <MyMenu />
      <FormContextProvider>
        <Form ref={formCommandsRef} onSubmit={handleSubmit}>
          <FormPassword
            label='Password'
            name='password'
            placeholder='현재 비밀번호를 입력해주세요'
            value={password}
            onChange={setPassword}
            onValidate={handlePwdValidate}
            required
          />
          <FormPassword
            label='New Password'
            name='newPwd'
            placeholder='새 비밀번호를 입력해주세요'
            value={newPwd}
            onChange={setNewPwd}
            onValidate={handleSamePwdValidate}
            required
          />
          <FormPassword
            label='Check Password'
            name='chkPwd'
            placeholder='새 비밀번호를 한 번 더 입력해주세요'
            onValidate={handleChkPwdValidate}
            required
          />
          <Button>비밀번호 변경</Button>
        </Form>
      </FormContextProvider>
    </Container>
  );
};

MyPwdChange.displayName = 'MyPwdChange';
export default MyPwdChange;
