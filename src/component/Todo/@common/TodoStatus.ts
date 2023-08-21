export const TodoStatus = {
  Todo: 'todo',
  Complete: 'comp',
  Delete: 'del',
} as const;

export type TodoStatus = ValueOf<typeof TodoStatus>;
