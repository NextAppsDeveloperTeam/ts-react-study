import * as React from 'react';
import {User, UserContextType} from "../@types/user";
import {UserContext} from "../../../context";
import './AddUser.scss';

const AddUser: React.FC = () => {
    const { addUser } = React.useContext(UserContext) as UserContextType;
    const [formData, setFormData] = useState<User | NonNullable<unknown>>();

    const handleForm = useCallback((e: React.FormEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [e.currentTarget.id]: e.currentTarget.value,
        });
    }, [formData]);
    const handleSaveUser = useCallback((e: React.FormEvent, formData: User | any) => {
        e.preventDefault();
        addUser(formData);
    }, [addUser]);

    return (
        <div className='addUser'>
        <form className='Form' onSubmit={(e) => handleSaveUser(e, formData)} action='./userList'>
            <div>
                {/*<div>*/}
                {/*    <label htmlFor='id'>아이디</label>*/}
                {/*    <input onChange={handleForm} type='text' id='id' readOnly />*/}
                {/*</div>*/}
                <div>
                    <label htmlFor='name'>이름</label>
                    <input onChange={handleForm} type='text' id='name' />
                </div>
                <div>
                    <label htmlFor='email'>이메일</label>
                    <input onChange={handleForm} type='text' id='email' />
                </div>
                <div>
                    <label htmlFor='phone'>전화번호</label>
                    <input onChange={handleForm} type='text' id='phone' />
                </div>
                <div>
                    <label htmlFor='password'>비밀번호</label>
                    <input onChange={handleForm} type='password' id='password' />
                </div>
                <div>
                    <label htmlFor='status'>회원유형</label>
                    <input onChange={handleForm} type='radio' id='status_user' name='status' value='user' checked />회원
                    <input onChange={handleForm} type='radio' id='status_admin' name='status' value='admin' />관리자
                </div>
            </div>
            <button disabled={formData === undefined}>추가</button>
        </form>
        </div>
    );
};
export default AddUser;