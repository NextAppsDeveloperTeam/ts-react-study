import React from 'react';
import {TodoHomeProps as Props} from './TodoHome.types';
import TodoList from "../TodoList/TodoList";
import {TList} from "../@common";
import TodoStatus from "../@common/TodoStatus";
import TodoForm from "../TodoForm/TodoForm";
import './TodoHome.scss';

const TodoHome: React.FC<Props> = () => {
    const [inputText, setInputText] = useState('');
    const [todoList, setTodoList] = useState<TList[]>([]);

    const handleTextTyping = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setInputText(e.target.value);
    }, []);

    const handleTextInput = useCallback((event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const newTodo: TList = {
            id: Date.now(),
            text: inputText,
            status: TodoStatus.Todo,
        };
        setTodoList([...todoList, newTodo]);
        setInputText('');
    }, [inputText, todoList]);

    const handleChangeStatus = useCallback((item: TList, status: string) => {
        setTodoList((old) =>
            old.map((oldItem) => {
                if (oldItem === item) {
                    oldItem.status = status;
                }
                return oldItem;
            })
        );
    }, []);

    return (
        <div className='TodoHome'>
            <h1>Todo</h1>
            <div className='todo-home-container'>
                <div>
                    <TodoForm
                        onChange={handleTextTyping}
                        onSubmit={handleTextInput}
                        inputText={inputText}
                    />
                    <p>TODO 목록</p>
                    <TodoList status={TodoStatus.Todo} todoList={todoList} onChangeStatus={handleChangeStatus}/>
                </div>
                <div>
                    <p>완료된 목록</p>
                    <TodoList status={TodoStatus.Complete} todoList={todoList} onChangeStatus={handleChangeStatus}/>
                </div>
                <div>
                    <p>삭제된 목록</p>
                    <TodoList status={TodoStatus.Delete} todoList={todoList} onChangeStatus={handleChangeStatus}/>
                </div>
            </div>
        </div>
    );
};

TodoHome.displayName = 'TodoHome';

export default TodoHome;
