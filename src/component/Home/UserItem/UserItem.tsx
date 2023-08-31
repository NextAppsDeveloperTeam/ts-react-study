import React from 'react';
import {User} from '../@types/user';
import './UserItem.scss';

type Props = {
    user: User;
    deleteUser: (id: number) => void;
};

const UserItem: React.FC<Props> = ({ user, deleteUser }) => {
    return (
        <div className='UserItem'>
            <div className='UserItem_list'>
                <span className='item'>아이디: {user.id}</span><br/>
                <span className='item'>이름: {user.name}</span><br/>
                <span className='item'>이메일: {user.email}</span><br/>
                <span className='item'>전화번호: {user.phone/*.substring(0, 3)}-{user.phone.substring(3, 7)}-{user.phone.substring(7, 11)*/}</span><br/>
                <span className='item'>회원유형: {user.status}</span>
            </div>
            <button onClick={() => deleteUser(user.id)} className='UserItem_button'>
                삭제
            </button>
            <hr/>
        </div>
    );
};
export default UserItem;