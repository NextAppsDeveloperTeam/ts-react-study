import React from "react";
// import {useNavigate} from "react-router-dom";
import './MyMenu.scss';

const MyMenu : React.FC = () => {
    // const navigate = useNavigate();
    return (
        <div className='MyMenu'>
            <header>
                <div className='menu'>
                    <nav>
                        <ul>
                            <li><a href='#'>회원정보</a></li>
                            <li><a href='#'>비밀번호 변경</a></li>
                            <li><a href='#'>탈퇴하기</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </div>
    );
};

MyMenu.displayName = 'Header';
export default MyMenu;
