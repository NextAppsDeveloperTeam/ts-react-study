import {useContext} from 'react';
import {UserContext, UserContextValue} from "../../../context";
import {User} from "../../../@types";
import UserItem from "../UserItem/UserItem";

const UserList = () => {
    const { userList, deleteUser } = useContext(UserContext) as UserContextValue;
    return (
        <>
            {userList.map((user: User) => (
                <UserItem key={user.id} deleteUser={deleteUser} user={user} />
            ))}
        </>
    );
};

export default UserList;