import { Board } from '../../../@types';
import React from 'react';

export type BoardContextValue = {
  boardList: Board[];
  addBoard: (board: Board) => void;
  deleteBoard: (id: number) => void;
};

export interface BoardContextProps {
  children: React.ReactNode;
}
