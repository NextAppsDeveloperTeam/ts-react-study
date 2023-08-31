import {useContext} from 'react';
import {UserContext} from "../../../context";
import {User, UserContextType} from "../@types/user";
import UserItem from "../UserItem/UserItem";

const UserList = () => {
    const { userList, deleteUser } = useContext(UserContext) as UserContextType;
    return (
        <>
            {userList.map((user: User) => (
                <UserItem key={user.id} deleteUser={deleteUser} user={user} />
            ))}
        </>
    );
};

export default UserList;