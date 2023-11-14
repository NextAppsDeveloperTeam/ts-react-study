import React, { useContext, useEffect } from 'react';
import { UserContext, UserContextValue } from '../../../context';
import { Form, FormCommands, FormContextProvider, FormPassword, Title } from '../../Common';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100vh;
  z-index: 10;
  position: fixed;
  top: 0;
  left: 0;
`;

const Modal = styled.div`
  width: 400px;
  height: 200px;
  z-index: 100;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.25);
  background: #ffffff;
`;

const FormStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
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

const MyPwdCheck: React.FC = () => {
  const { auth } = useContext(UserContext) as UserContextValue;

  const navigate = useNavigate();

  const formCommandsRef = useRef<FormCommands>(null);

  useEffect(() => {
    setTimeout(() => {
      if (formCommandsRef.current) {
        formCommandsRef.current.focus('password');
      }
    }, 1);
  }, []);

  const handlePwdValidate = useCallback(
    (value?: string) => {
      return auth?.password === value ? true : '비밀번호가 일치하지 않습니다.';
    },
    [auth?.password]
  );

  const handleSubmit = useCallback(() => {
    navigate('/myInfoUpdate');
  }, [navigate]);

  return (
    <Container>
      <Modal>
      <FormContextProvider>
        <FormStyled>
        <Form ref={formCommandsRef} onSubmit={handleSubmit}>
          <FormPassword
            label='Password'
            name='password'
            placeholder='비밀번호를 입력해주세요'
            onValidate={handlePwdValidate}
            required
          />
          <Button>비밀번호 확인</Button>
        </Form>
        </FormStyled>
      </FormContextProvider>
      </Modal>
    </Container>
  );
};

MyPwdCheck.displayName = 'MyPwdChange';
export default MyPwdCheck;
