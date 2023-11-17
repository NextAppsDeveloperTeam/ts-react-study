import React, { useContext, useEffect } from 'react';
import { UserContext, UserContextValue } from '../../../context';
import { Form, FormCommands, FormContextProvider, FormPassword } from '../../Common';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

type Props = {
  onCLick?: () => void;
};

const ModalBackGround = styled.div`
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100vh;
  position: absolute;
  bottom: 0;
  left: 0;
`;

const Modal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 200px;
  position: absolute;
  margin: 40px 0 0 100px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  background: #ffffff;
`;

const Button = styled.button`
  width: 135px;
  height: 35px;
  margin: 10px 0;
  font-size: 16px;
  border: none;
  background: #000000;
  color: #ffffff;

  &:last-child {
    margin-left: 10px;
  }
  
  &:hover {
    opacity: 0.7;
`;

const MyPwdCheck: React.FC<Props> = ({ onCLick }) => {
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
    <>
      <ModalBackGround />
      <Modal>
        <FormContextProvider>
            <Form ref={formCommandsRef} onSubmit={handleSubmit}>
              <FormPassword
                label='Password'
                name='password'
                placeholder='비밀번호를 입력해주세요'
                onValidate={handlePwdValidate}
                required
              />
              <Button onClick={onCLick}>취소</Button>
              <Button>확인</Button>
            </Form>
        </FormContextProvider>
      </Modal>
    </>
  );
};

MyPwdCheck.displayName = 'MyPwdChange';
export default MyPwdCheck;
