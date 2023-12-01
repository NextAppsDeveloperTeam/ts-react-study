import React, { useContext, useState } from 'react';
import { Board } from '../../../@types';
import { BoardContext } from '../BoardContext';
import { BoardContextProps as Props } from './BoardContextProvider.types';
import { UserContext, UserContextValue } from '../../UserContext';

const boards: Board[] = [
  {
    id: 2,
    title: '자유롭게 작성해주세요',
    content: '자유롭게 작성해주세요.',
    user_id: 2,
    create_date: new Date('2023-11-3'),
    update_date: new Date(),
    views: 0,
    comment: [{ id: 1, user_id: 2, content: '댓글' }],
  },
  {
    id: 1,
    title: '자유게시판입니다',
    content: '자유게시판입니다.',
    user_id: 1,
    create_date: new Date('2023-9-17'),
    update_date: undefined,
    views: 0,
    comment: [{ id: 1, user_id: 1, content: '댓글' }],
  },
];

const BoardContextProvider = ({ children }: Props) => {
  const { auth } = useContext(UserContext) as UserContextValue;

  const [boardList, setBoardList] = useState<Board[]>(boards);
  // const [commentList, setCommentList] = useState<Board['comment']>(boards);
  const [board, setBoard] = useState<Board>();
  const [loading, setLoading] = useState(false);

  // -------------------------------------------------------------------------------------------------------------------
  useEffect(() => {
    const list = localStorage.getItem('BoardList');
    if (list) {
      const boardList: Board[] = JSON.parse(list);
      setBoardList(boardList);

      const boardId = localStorage.getItem('BoardID');
      if (boardId) {
        const board = boardList.find((info) => info.id === Number(boardId));
        setBoard(board);
      }
    }
    // localStorage.removeItem('BoardList');
    setLoading(true);
  }, []);

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
            comment: undefined,
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

  const openBoard = useCallback(
    (id: number) => {
      const boardInfo = boardList.find((info) => info.id === id);
      if (boardInfo) {
        setBoard(boardInfo);
        localStorage.setItem('BoardID', `${boardInfo.id}`);
        return true;
      } else {
        return false;
      }
    },
    [boardList]
  );

  const addViews = useCallback(
    (id: number) => {
      const boardInfo = boardList.find((info) => info.id === id);
      if (boardInfo) {
        const addViews = boardList.map((item) => ({
          ...item,
          views: item.id === boardInfo.id ? item.views + 1 : item.views,
        }));
        localStorage.setItem('BoardList', JSON.stringify(addViews));
        setBoardList(addViews);
      }
    },
    [boardList]
  );

  const addComment = useCallback(
    (board: Board) => {
      if (board && auth) {
        const boardInfo = boardList.find((info) => info.id === board.id);
        if (boardInfo) {
          const addCommentList = boardList.map((item) => ({
            ...item,
            comment:
              item.id === boardInfo.id
                ? [
                    {
                      id: boardInfo.comment ? boardInfo.comment[boardInfo.comment.length - 1].id : 1,
                      user_id: auth.id,
                      content: boardInfo.content,
                    },
                    ...boardList,
                  ]
                : item.comment,
          }));
          localStorage.setItem('BoardList', JSON.stringify(addCommentList));
          setBoardList(addCommentList);
        }
      }
    },
    [auth, boardList]
  );
  // -------------------------------------------------------------------------------------------------------------------

  return (
    <BoardContext.Provider
      value={{
        board,
        boardList,
        addBoard,
        deleteBoard,
        openBoard,
        addViews,
        addComment,
      }}
    >
      {loading && children}
    </BoardContext.Provider>
  );
};
export default BoardContextProvider;
