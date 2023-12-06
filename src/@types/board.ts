export interface BoardComment {
  id: number;
  user_id: number;
  content: string;
  create_date: string;
}

export interface Board {
  readonly id: number;
  title: string;
  content: string;
  user_id: number;
  create_date: string;
  update_date: string;
  views: number;
  comment: BoardComment[];
}
