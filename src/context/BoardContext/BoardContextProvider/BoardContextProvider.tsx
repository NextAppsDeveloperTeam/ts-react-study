import React, { useContext, useState } from 'react';
import { Board } from '../../../@types';
import { BoardContext } from '../BoardContext';
import { BoardContextProps as Props } from './BoardContextProvider.types';
import { UserContext, UserContextValue } from '../../UserContext';

const DefaultBoardList: Board[] = [
  {
    id: 2,
    title: '자유롭게 작성해주세요',
    content: '자유롭게 작성해주세요.',
    user_id: 2,
    create_date: dateToString(new Date('2023-09-01')),
    update_date: dateToString(new Date('2023-09-01')),
    views: 0,
    comment: [{ id: 1, user_id: 1, content: '댓글', create_date: dateToString(new Date('2023-09-03')) }],
  },
  {
    id: 1,
    title: '자유게시판입니다',
    content: '자유게시판입니다.',
    user_id: 1,
    create_date: dateToString(new Date('2023-09-01')),
    update_date: dateToString(new Date('2023-09-01')),
    views: 0,
    comment: [{ id: 1, user_id: 2, content: '댓글', create_date: dateToString(new Date('2023-09-02')) }],
  },
];

const BoardContextProvider = ({ children }: Props) => {
  const { auth } = useContext(UserContext) as UserContextValue;

  const [boardList, setBoardList] = useState<Board[]>();

  // -------------------------------------------------------------------------------------------------------------------
  useEffect(() => {
    const list = localStorage.getItem('BoardList');
    if (list) {
      const boardList: Board[] = JSON.parse(list);
      setBoardList(boardList);
    } else {
      setBoardList(DefaultBoardList);
    }
    // localStorage.removeItem('BoardList');
  }, []);

  // -------------------------------------------------------------------------------------------------------------------

  const addBoard = useCallback(
    (title: string, content: string) => {
      if (boardList && auth) {
        const newList: Board[] = [
          {
            id: boardList[0].id + 1,
            title: title,
            content: content,
            user_id: auth.id,
            create_date: dateToString(),
            update_date: dateToString(),
            views: 0,
            comment: [],
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
      if (boardList) {
        const list = boardList.filter((board) => board.id !== id);
        localStorage.removeItem('BoardList');
        setBoardList(list);
      }
    },
    [boardList]
  );

  const updateBoard = useCallback(
    (id: number, title: string, content: string) => {
      if (boardList) {
        const boardInfo = boardList.find((info) => info.id === id);
        if (boardInfo) {
          const updateList = boardList.map((item) => ({
            ...item,
            title: item.id === boardInfo.id ? title : item.title,
            content: item.id === boardInfo.id ? content : item.content,
          }));
          localStorage.setItem('BoardList', JSON.stringify(updateList));
          setBoardList(updateList);
        }
      }
    },
    [boardList]
  );

  const getBoardInfo = useCallback(
    (id: number, addViewCount?: boolean) => {
      if (boardList) {
        const boardInfo = boardList.find((info) => info.id === id);
        if (notEmpty(boardInfo)) {
          if (addViewCount) {
            const info = boardInfo;
            info.views = info.views + 1;

            const newBoardList = [...boardList];
            localStorage.setItem('BoardList', JSON.stringify(newBoardList));
          }

          return boardInfo;
        }
      }
    },
    [boardList]
  );

  const addComment = useCallback(
    (boardId: number, comment: string) => {
      if (auth && boardList) {
        const info = getBoardInfo(boardId);
        if (info) {
          const commentId =
            info.comment.reduce((res, comment) => {
              return comment.id > res ? comment.id : res;
            }, 0) + 1;

          info.comment.unshift({
            id: commentId,
            user_id: auth.id,
            content: comment,
            create_date: dateToString(),
          });

          const newBoardList = boardList.map((board) => (board.id === boardId ? { ...info } : board));
          localStorage.setItem('BoardList', JSON.stringify(newBoardList));
          setBoardList(newBoardList);
        }
      }
    },
    [auth, boardList, getBoardInfo]
  );

  const updateComment = useCallback((boardId: number, comment: string) => {
    if (auth && boardList) {
      const Info = getBoardInfo(boardId);
      if (Info) {
        /**/
      }
    }

    // localStorage.setItem('BoardList', JSON.stringify(updateList));
    // setBoardList(updateList);
  }, [auth, boardList, getBoardInfo]);

  // -------------------------------------------------------------------------------------------------------------------

  return boardList ? (
    <BoardContext.Provider
      value={{
        boardList,
        addBoard,
        deleteBoard,
        updateBoard,
        getBoardInfo,
        addComment,
        updateComment,
      }}
    >
      {children}
    </BoardContext.Provider>
  ) : null;
};
export default BoardContextProvider;
