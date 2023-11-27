export interface Board {
  readonly id: number;
  title: string;
  content: string;
  user_id: number;
  create_date: Date;
  update_date?: Date;
  views: number;
  comment?: { id?: number; user_id?: number; content?: string }[];
}
