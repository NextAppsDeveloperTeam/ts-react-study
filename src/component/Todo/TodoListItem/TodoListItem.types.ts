import {TodoStatus, TTodoListItem} from "../@common";

export interface TodoListItemProps {
    item: TTodoListItem;
    onChangeStatus(item: TTodoListItem, status: TodoStatus): void;
}
