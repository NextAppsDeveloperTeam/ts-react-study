import React, { useContext, useState } from 'react';
import { Board } from '../../../@types';
import { BoardContext } from '../BoardContext';
import { BoardContextProps as Props } from './BoardContextProvider.types';
import { UserContext, UserContextValue } from '../../UserContext';

const boards: Board[] = [
  {
    id: 2,
    title: '제목2',
    content: '자유롭게 작성해주세요.',
    user_id: 2,
    create_date: new Date('2023-11-5'),
    update_date: new Date(),
    views: 0,
    comment: [{ id: 1, user_id: 2, content: '댓글' }],
  },
  {
    id: 1,
    title: '제목',
    content: '자유게시판입니다.',
    user_id: 1,
    create_date: new Date('2023-9-13'),
    update_date: undefined,
    views: 0,
    comment: [{ id: 1, user_id: 1, content: '댓글' }],
  },
];

const BoardContextProvider = ({ children }: Props) => {
  const { auth } = useContext(UserContext) as UserContextValue;

  const [boardList, setBoardList] = useState<Board[]>(boards);
  // const [commentList, setCommentList] = useState<Board['comment']>(boards);
  const [loading, setLoading] = useState(false);

  // -------------------------------------------------------------------------------------------------------------------
  useEffect(() => {
    const list = localStorage.getItem('BoardList');
    if (list) {
      const boardList: Board[] = JSON.parse(list);
      setBoardList(boardList);
    }
    // localStorage.removeItem('BoardList');
    setLoading(true);
  }, []);
ll(boardList)
  // -------------------------------------------------------------------------------------------------------------------

  const addBoard = useCallback(
    (board: Board) => {
      if (board && auth) {
        const newList: Board[] = [
          {
            id: boardList[0].id + 1,
            title: board.title,
            content: board.content,
            user_id: auth.id,
            create_date: new Date(),
            update_date: undefined,
            views: 0,
            comment: [
              // {
              //   id: commentList[commentList.length - 1].id + 1,
              //   user_id: board.user_id,
              //   content: board.content,
              // },
              // ...commentList,
              {
                id: undefined,
                user_id: undefined,
                content: undefined,
              },
            ],
          },
          ...boardList,
        ];
        localStorage.setItem('BoardList', JSON.stringify(newList));
        setBoardList(newList);
      }
    },
    [auth, boardList]
  );

  const deleteBoard = useCallback(
      (id: number) => {
        const list = boardList.filter((board) => board.id !== id);
        localStorage.removeItem('BoardList');
        setBoardList(list);
      },
      [boardList]
  );

  // -------------------------------------------------------------------------------------------------------------------

  return (
    <BoardContext.Provider
      value={{
        boardList,
        addBoard,
        deleteBoard,
      }}
    >
      {loading && children}
    </BoardContext.Provider>
  );
};

export default BoardContextProvider;
