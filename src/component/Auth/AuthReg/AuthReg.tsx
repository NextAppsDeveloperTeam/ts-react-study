import * as React from 'react';
import {UserStatus} from "../../../@types";
import {useState} from "react";
import {UserContext, UserContextValue} from "../../../context";
import './AuthReg.scss';

const AuthReg: React.FC = () => {
  const { addUser } = React.useContext(UserContext) as UserContextValue;

  // const inputRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [checkPwd, setCheckPwd] = useState('');
  const [status, setStatus] = useState<UserStatus>(UserStatus.User);

  const handelJoinOnCLick = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if(!name || !email || !phone || !password || !checkPwd) {
          alert('모든 값을 정확히 입력해주세요');
      }
      addUser;
    },
    [addUser, checkPwd, email, name, password, phone]);

  return (
    <div className='AuthReg'>
      <div>
        <div>
          <div>
            <label htmlFor='name'>이름</label>
            <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label htmlFor='email'>이메일</label>
            <input type='text' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor='phone'>전화번호</label>
            <input type='text' id='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
          </div>
          <div>
            <label htmlFor='password'>비밀번호</label>
            <input type='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
            <div>
                <label htmlFor='checkPwd'>비밀번호 확인</label>
                <input type='password' id='checkPwd' value={checkPwd} onChange={(e) => setCheckPwd(e.target.value)} />
            </div>
          <div>
            <label htmlFor='status'>회원유형</label>
            <label>
              <input
                type='radio'
                id='status_user'
                name='status'
                value={status}
                onChange={() => setStatus(UserStatus.User)}
                checked={status===UserStatus.User}
              />
              회원
            </label>
            <label>
              <input
                type='radio'
                id='status_admin'
                name='status'
                value={status}
                onChange={() => setStatus(UserStatus.Admin)}
              />
              관리자
            </label>
          </div>
        </div>
        <button type='submit' onClick={handelJoinOnCLick}>
          추가
        </button>
      </div>
    </div>
  );
};
export default AuthReg;