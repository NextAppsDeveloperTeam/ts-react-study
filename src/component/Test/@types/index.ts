export interface User {
  id: number;
  name: string;
  tel?: string;
  status: 'ON' | 'OFF';
}

export type UserList = User[];
