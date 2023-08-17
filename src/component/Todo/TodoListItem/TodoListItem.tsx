import React from 'react';
import {TodoListItemProps as Props} from './TodoListItem.types';
import TodoStatus from "../@common/TodoStatus";
import './TodoListItem.scss';

const TodoListItem: React.FC<Props> = ({item, onChangeStatus}) => {
    const handelCompleteClick = useCallback(() => {
        onChangeStatus && onChangeStatus(item, TodoStatus.Complete);
    }, [item, onChangeStatus]);

    const handelCancelClick = useCallback(() => {
        onChangeStatus && onChangeStatus(item, TodoStatus.Todo);
    }, [item, onChangeStatus]);

    const handelDeleteClick = useCallback(() => {
        onChangeStatus && onChangeStatus(item, TodoStatus.Delete);
    }, [item, onChangeStatus]);

    const now = new Date();

    return (
        <div className='TodoListItem'>
            <span className={`TodoItem_con ${item.status !== TodoStatus.Todo ? 'TodoItem_con_checked' : ''}`}>{item.text}</span>
            <span className={`TodoItem_date ${item.status !== TodoStatus.Todo ? 'TodoItem_date_checked' : ''}`}>{now.getFullYear()}.{now.getMonth() + 1}.{now.getDate()}</span>
            <div className='buttonContainer'>
                {item.status === TodoStatus.Todo ? (
                    <button className='TodoItem_comp' onClick={handelCompleteClick}>완료</button>
                ) : null}
                {item.status === TodoStatus.Complete ? (
                    <button className='TodoItem_cancel' onClick={handelCancelClick}>취소</button>
                ) : null}
                {item.status !== TodoStatus.Delete ? (
                    <button className='TodoItem_del' onClick={handelDeleteClick}>삭제</button>
                ) : null}
            </div>
        </div>
    );
};

TodoListItem.displayName = 'TodoListItem';

export default TodoListItem;
