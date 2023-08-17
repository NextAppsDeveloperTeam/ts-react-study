const TodoStatus = {
  Todo: 'todo',
  Complete: 'comp',
  Delete: 'del',

  getList() {
    return [TodoStatus.Todo, TodoStatus.Complete, TodoStatus.Delete];
  },
};

export default TodoStatus;
