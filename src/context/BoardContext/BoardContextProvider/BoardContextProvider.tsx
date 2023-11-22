import React, {useContext, useState} from 'react';
import { Board } from '../../../@types';
import { BoardContext } from '../BoardContext';
import { BoardContextProps as Props } from './BoardContextProvider.types';
import {UserContext, UserContextValue} from "../../UserContext";

const boards: Board[] = [
  {
    id: 1,
    title: '제목',
    content: '내용',
    user_id: 1,
    create_date: new Date('2023-9-13'),
    update_date: undefined,
    views: 0,
    comment: [{ id: 1, user_id: 1, content: '댓글' }],
  },
  {
    id: 2,
    title: '제목2',
    content: '내용2',
    user_id: 2,
    create_date: new Date('2023-11-5'),
    update_date: new Date(),
    views: 0,
    comment: [{ id: 1, user_id: 2, content: '댓글' }],
  },
];

const BoardContextProvider = ({ children }: Props) => {
  const { auth } = useContext(UserContext) as UserContextValue;

  const [boardList, setBoardList] = useState<Board[]>(boards);

  // -------------------------------------------------------------------------------------------------------------------
  useEffect(() => {
    const list = localStorage.getItem('BoardList');
    if (list) {
      const userList: Board[] = JSON.parse(list);
      setBoardList(userList);
    }
  }, []);

  // -------------------------------------------------------------------------------------------------------------------

  const addBoard = useCallback(
    (board: Board) => {
      if (board && auth) {
        const newList: Board[] = [
          ...boardList,
          {
            id: boardList[boardList.length - 1].id + 1,
            title: board.title,
            content: board.content,
            user_id: auth.id,
            create_date: new Date(),
            update_date: undefined,
            views: 0,
            comment: [{ id: board.id, user_id: board.user_id, content: board.content }],
          },
        ];
        localStorage.setItem('BoardList', JSON.stringify(newList));
        setBoardList(newList);
      }
    },
    [auth, boardList]
  );

  // -------------------------------------------------------------------------------------------------------------------

  return (
    <BoardContext.Provider
      value={{
        boardList,
        addBoard,
      }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export default BoardContextProvider;
