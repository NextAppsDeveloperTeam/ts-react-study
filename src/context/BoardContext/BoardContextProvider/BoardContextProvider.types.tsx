import { Board } from '../../../@types';
import React from 'react';

export type BoardContextValue = {
  board?: Board;
  boardList: Board[];
  addBoard: (title: string, content: string) => void;
  deleteBoard: (id: number) => void;
  updateBoard: (id: number, title: string, content: string) => void;
  getBoardInfo(id: number, addViewCount?: boolean): Board | undefined;
  addComment(boardId: number, comment: string): void;
  // updateComment(boardId: number, comment: string): void;
  deleteComment(boardId: number, commentId: number): void;
};

export interface BoardContextProps {
  children: React.ReactNode;
}
