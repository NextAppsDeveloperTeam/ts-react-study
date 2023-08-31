import * as React from 'react';
import './LoginUser.scss';

const LoginUser: React.FC = () => {

    return (
        <div className='loginUser'>
            <form className='Form' action='./mypage'>
                <div>
                    <div>
                        <label htmlFor='email'>이메일</label>
                        <input type='text' id='email' />
                    </div>
                    <div>
                        <label htmlFor='password'>비밀번호</label>
                        <input type='password' id='password' />
                    </div>
                </div>
                <button>로그인</button>
            </form>
        </div>
    );
};
export default LoginUser;