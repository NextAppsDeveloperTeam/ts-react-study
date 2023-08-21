import {TodoHomeProps as Props} from './TodoHome.types';
import TodoList from "../TodoList/TodoList";
import {TTodoList, TTodoListItem, TodoStatus} from "../@common";
import TodoForm from "../TodoForm/TodoForm";
import './TodoHome.scss';

const TodoHome: React.FC<Props> = () => {
    const [todoList, setTodoList] = useState<TTodoList>([]);

    const handleSubmit = useCallback((text: string) => {
        const now = new Date();
        const item = {
            id: Date.now(),
            text,
            date: (now.getFullYear()+(`0${now.getMonth()+1}`).slice(-2)+(`0${now.getDate()}`).slice(-2)).toString(),
            status: TodoStatus.Todo,
        };
        setTodoList((old) => [item, ...old]);
    }, []);

    const handleChangeStatus = useCallback((item: TTodoListItem, status: TodoStatus) => {
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
                    <TodoForm onSubmit={handleSubmit}/>
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
