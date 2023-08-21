import React from 'react';
import {TodoListItemProps as Props} from './TodoListItem.types';
import './TodoListItem.scss';
import {TodoStatus} from "../@common";

const TodoListItem: React.FC<Props> = ({item, onChangeStatus}) => {
    const handelCompleteClick = useCallback(() => {
        onChangeStatus(item, TodoStatus.Complete);
    }, [item, onChangeStatus]);

    const handelCancelClick = useCallback(() => {
        onChangeStatus(item, TodoStatus.Todo);
    }, [item, onChangeStatus]);

    const handelDeleteClick = useCallback(() => {
        onChangeStatus(item, TodoStatus.Delete);
    }, [item, onChangeStatus]);

    const button = useMemo(() => {
        switch (item.status) {
            case TodoStatus.Todo :
                return <button className='TodoItem_comp' onClick={handelCompleteClick}>완료</button>
            case TodoStatus.Complete :
                return <button className='TodoItem_cancel' onClick={handelCancelClick}>취소</button>
        }
    }, [handelCancelClick, handelCompleteClick, item.status]);

    const deleteBtn = useMemo(() => {
        if (item.status !== TodoStatus.Delete) {
            return <button className='TodoItem_del' onClick={handelDeleteClick}>삭제</button>
        }
    }, [handelDeleteClick, item.status]);

    return (
        <div className='TodoListItem'>
            <span
                className={`TodoItem_con ${item.status !== TodoStatus.Todo ? 'TodoItem_con_checked' : ''}`}>{item.text}</span>
            <span
                className={`TodoItem_date ${item.status !== TodoStatus.Todo ? 'TodoItem_date_checked' : ''}`}>{item.date}</span>
            {button}
            {deleteBtn}
        </div>
    );
};

TodoListItem.displayName = 'TodoListItem';

export default TodoListItem;
