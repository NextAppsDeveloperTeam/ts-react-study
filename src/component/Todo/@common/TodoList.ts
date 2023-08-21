import {TodoStatus} from "./TodoStatus";

export interface TTodoListItem {
    id: number;
    text: string;
    date: string;
    status: TodoStatus;
}

export type TTodoList = TTodoListItem[];