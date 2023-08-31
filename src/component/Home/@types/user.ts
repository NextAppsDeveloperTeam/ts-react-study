export const UserStatus = {
    User: 'user',
    Admin: 'admin',
} as const;

export type UserStatus = ValueOf<typeof UserStatus>;

export interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    password: string;
    status: UserStatus;
}

export type UserContextType = {
    userList: User[];
    addUser: (user: User) => void;
    deleteUser: (id: number) => void;
}

export const users : User[] = [
    {
        id: 1,
        name: 'admin',
        email: 'test@test.com',
        phone: '01011112222',
        password: '1234',
        status: UserStatus.Admin,
    },
    {
        id: 2,
        name: 'user1',
        email: 'test2@test.com',
        phone: '01011113333',
        password: '1234',
        status: UserStatus.User,
    },
];