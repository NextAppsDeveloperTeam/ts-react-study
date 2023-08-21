import {TodoStatus, TTodoList, TTodoListItem} from "../@common";

export interface TodoListProps {
    todoList: TTodoList;
    status: TodoStatus;
    onChangeStatus(item: TTodoListItem, status: TodoStatus): void;
}
