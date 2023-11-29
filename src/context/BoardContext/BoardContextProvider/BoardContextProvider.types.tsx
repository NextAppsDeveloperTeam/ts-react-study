import { Board } from '../../../@types';
import React from 'react';

export type BoardContextValue = {
  board?: Board;
  boardList: Board[];
  addBoard: (board: Board) => void;
  deleteBoard: (id: number) => void;
  openBoard(id: number): boolean;
};

export interface BoardContextProps {
  children: React.ReactNode;
}
