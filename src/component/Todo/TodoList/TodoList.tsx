import React from 'react';
import {TodoListProps as Props} from './TodoList.types';
import TodoListItem from "../TodoListItem/TodoListItem";

const TodoList: React.FC<Props> = ({todoList, status, onChangeStatus}) => {

    const listItems = useMemo(() =>
        todoList
        .filter((item: { status: string; }) => item.status === status)
        .map((item: { id: number; text: string; status: string; }) =>
            <TodoListItem
                key={item.id}
                item={item}
                onChangeStatus={onChangeStatus}
            />),
    [onChangeStatus, status, todoList]);

    return (
        <div className='TodoList'>
            {listItems}
        </div>
    );
};

TodoList.displayName = 'TodoList';

export default TodoList;
