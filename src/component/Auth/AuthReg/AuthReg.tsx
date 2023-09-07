import * as React from 'react';
import { UserStatus } from '../../../@types';
import { useContext, useState } from 'react';
import { UserContext, UserContextValue } from '../../../context';
import {Button, Container, Form, Input, InputBox, Label} from '../../style';
import styled from 'styled-components';
import {useNavigate} from "react-router-dom";

const LabelRadio = styled.label`
  margin-right: 50px;
`;

const InputRadio = styled.input`
  margin-right: 7px;
`;

const Span = styled.p`
  text-align: right;
  font-size: 13px;
  margin-top: -22px;
  padding-bottom: 7px;
  color: #0012dc;
`;

const AuthReg: React.FC = () => {
  const navigate = useNavigate();

  const { userList, addUser } = useContext(UserContext) as UserContextValue;

  const inputNameRef = useRef<HTMLInputElement>(null);
  const inputEmailRef = useRef<HTMLInputElement>(null);
  const inputPhoneRef = useRef<HTMLInputElement>(null);
  const inputPasswordRef = useRef<HTMLInputElement>(null);
  const inputCheckPwdRef = useRef<HTMLInputElement>(null);

  const [id] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [checkPwd, setCheckPwd] = useState('');
  const [status, setStatus] = useState<UserStatus>(UserStatus.User);

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
    if(name) {
      setName(name.replace(/[ {}[\]/?.,;:|)*~`!^\-_+<>@#$%&'"\\(=]/g, ''));
    }
    if(phone) {
      setPhone(phone.replace(/[^0-9]/g, '').replace(/^(\d{2,3})(\d{3,4})(\d{4})$/, '$1-$2-$3'));
    }
  }, [name, phone]);

  const handelJoinCLick = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!name) {
        console.log(chkEmail);
        alert('이름을 입력해주세요');
        inputNameRef.current?.focus();
      } else if (!email) {
        alert('이메일을 입력해주세요');
        inputEmailRef.current?.focus();
      } else if (!emailRegEx.test(email)) {
        alert('이메일을 형식에 맞게 입력해주세요');
        inputEmailRef.current?.focus();
      } else if(chkEmail.includes(email)) {
        alert('이미 존재하는 이메일입니다')
        inputEmailRef.current?.focus();
      } else if (!phone) {
        alert('전화번호를 입력해주세요');
        inputPhoneRef.current?.focus();
      } else if (phone.length<9) {
        alert('전화번호는 최소 9자입니다');
        inputPhoneRef.current?.focus();
      } else if (!password) {
        alert('비밀번호를 입력해주세요');
        inputPasswordRef.current?.focus();
      } else if (!passwordRegEx.test(password)) {
        alert('비밀번호를 형식에 맞게 입력해주세요\n(영문, 숫자, 특수문자 포함 8~16자)');
        inputPasswordRef.current?.focus();
      } else if (!checkPwd) {
        alert('비밀번호를 한 번 더 입력해주세요');
        inputCheckPwdRef.current?.focus();
      } else if (checkPwd !== password) {
        alert('비밀번호가 일치하지 않습니다');
        inputCheckPwdRef.current?.focus();
      } else {
        alert('회원가입이 완료되었습니다\n로그인해주세요');
        navigate('/login');
        addUser({ id, name, email, phone, password, status });
        // setName('');
        // setEmail('');
        // setPhone('');
        // setPassword('');
        // setCheckPwd('');
        // setStatus(UserStatus.User);
      }
    },
    [addUser, checkPwd, chkEmail, email, emailRegEx, id, name, navigate, password, passwordRegEx, phone, status]
  );

  return (
    <Container>
      <Form>
        <InputBox>
          <Label htmlFor='name'>이름</Label>
          <Input
            ref={inputNameRef}
            type='text'
            id='name'
            value={name}
            placeholder='이름을 입력해주세요'
            onChange={(e) => setName(e.target.value)}
          />
        </InputBox>
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
        <Span>이메일 형식에 맞게 입력</Span>
        <InputBox>
          <Label htmlFor='phone'>전화번호</Label>
          <Input
            ref={inputPhoneRef}
            type='text'
            id='phone'
            value={phone}
            placeholder='01011112222'
            maxLength={13}
            onChange={(e) => setPhone(e.target.value)}
          />
        </InputBox>
        <Span>'-' 없이 번호만 입력 (9~11자)</Span>
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
        <Span>영문, 숫자, 특수문자 포함 8~16자</Span>
        <InputBox>
          <Label htmlFor='checkPwd'>비밀번호 확인</Label>
          <Input
            ref={inputCheckPwdRef}
            type='password'
            id='checkPwd'
            value={checkPwd}
            placeholder='비밀번호를 한 번 더 입력해주세요'
            onChange={(e) => setCheckPwd(e.target.value)}
          />
        </InputBox>
        <InputBox>
          <Label htmlFor='status'>회원유형</Label>
          <LabelRadio>
            <InputRadio
              type='radio'
              id='user'
              name='status'
              value={status}
              onChange={() => setStatus(UserStatus.User)}
              checked={status === UserStatus.User}
            />
            회원
          </LabelRadio>
          <LabelRadio>
            <InputRadio
              type='radio'
              id='admin'
              name='status'
              value={status}
              onChange={() => setStatus(UserStatus.Admin)}
            />
            관리자
          </LabelRadio>
        </InputBox>
        <Button className='regBtn' type='submit' onClick={handelJoinCLick}>
          가입하기
        </Button>
      </Form>
    </Container>
  );
};
export default AuthReg;
