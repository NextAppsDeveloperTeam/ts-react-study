export const UserStatus = {
    User: 'user',
    Admin: 'admin',
} as const;

export type UserStatus = ValueOf<typeof UserStatus>;

export interface User {
    readonly id: number;
    name: string;
    email: string;
    phone: string;
    password: string;
    status: UserStatus;
}