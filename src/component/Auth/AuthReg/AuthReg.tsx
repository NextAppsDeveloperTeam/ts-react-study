import * as React from 'react';
import { UserStatus } from '../../../@types';
import { useContext, useState } from 'react';
import { UserContext, UserContextValue } from '../../../context';
import './AuthReg.scss';

const AuthReg: React.FC = () => {
  const { addUser } = useContext(UserContext) as UserContextValue;

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
  const phoneRegEx = useMemo(() => {
    // return /^(\d{2,3})(\d{3,4}(\d{4})$/, `$1-$2-$3`;
    return /^[0-9]{9,11}$/;
  }, []);

  // const handelCheckPwdChange = useCallback((e:React.ChangeEvent<HTMLInputElement>) => {
  //   const value = e.target.value;
  //   setCheckPwd(value);
  //   if (value !== password) {
  //     alert('비밀번호가 일치하지 않습니다');
  //   }
  // }, [password]);

  const handelJoinCLick = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (!name) {
        alert('이름을 입력해주세요');
        inputNameRef.current?.focus();
      } else if (!email) {
        alert('이메일을 입력해주세요');
        inputEmailRef.current?.focus();
      } else if (!emailRegEx.test(email)) {
        alert('이메일을 형식에 맞게 입력해주세요');
        inputEmailRef.current?.focus();
      } else if (!phone) {
        alert('전화번호를 입력해주세요');
        inputPhoneRef.current?.focus();
      } else if (!phoneRegEx.test(phone)) {
        alert('전화번호를 형식에 맞게 입력해주세요');
        inputPhoneRef.current?.focus();
      } else if (!password) {
        alert('비밀번호를 입력해주세요');
        inputPasswordRef.current?.focus();
      } else if (!passwordRegEx.test(password)) {
        alert('비밀번호를 형식에 맞게 입력해주세요');
        inputPasswordRef.current?.focus();
      } else if (!checkPwd) {
        alert('비밀번호를 한 번 더 입력해주세요');
        inputCheckPwdRef.current?.focus();
      } else if (checkPwd !== password) {
        alert('비밀번호가 일치하지 않습니다');
      } else {
        alert('회원가입이 완료되었습니다');
        addUser({ id, name, email, phone, password, status });
        setName('');
        setEmail('');
        setPhone('');
        setPassword('');
        setCheckPwd('');
        setStatus(UserStatus.User);
      }
    },
    [addUser, checkPwd, email, emailRegEx, id, name, password, passwordRegEx, phone, phoneRegEx, status]
  );

  return (
    <div className='AuthReg'>
      <div>
        <div>
          <div>
            <label htmlFor='name'>이름</label>
            <input
              ref={inputNameRef}
              type='text'
              id='name'
              value={name}
              placeholder='이름을 입력해주세요'
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='email'>이메일</label>
            <input
              ref={inputEmailRef}
              type='text'
              id='email'
              value={email}
              placeholder='text00@email.com'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <span>이메일 형식에 맞게 입력</span>
          </div>
          <div>
            <label htmlFor='phone'>전화번호</label>
            <input
              ref={inputPhoneRef}
              type='text'
              id='phone'
              value={phone}
              placeholder='01011112222'
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div>
            <span>'-' 없이 번호만 입력</span>
          </div>
          <div>
            <label htmlFor='password'>비밀번호</label>
            <input
              ref={inputPasswordRef}
              type='password'
              id='password'
              value={password}
              placeholder='비밀번호를 입력해주세요'
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <span>문자, 숫자, 특수문자 포함 8~16자</span>
          </div>
          <div>
            <label htmlFor='checkPwd'>비밀번호 확인</label>
            <input
              ref={inputCheckPwdRef}
              type='password'
              id='checkPwd'
              value={checkPwd}
              placeholder='비밀번호를 한 번 더 입력해주세요'
              onChange={(e) => setCheckPwd(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='status'>회원유형</label>
            <label>
              <input
                type='radio'
                id='user'
                name='status'
                value={status}
                onChange={() => setStatus(UserStatus.User)}
                checked={status === UserStatus.User}
              />
              회원
            </label>
            <label>
              <input
                type='radio'
                id='admin'
                name='status'
                value={status}
                onChange={() => setStatus(UserStatus.Admin)}
              />
              관리자
            </label>
          </div>
        </div>
        <button type='submit' onClick={handelJoinCLick}>
          추가
        </button>
      </div>
    </div>
  );
};
export default AuthReg;
