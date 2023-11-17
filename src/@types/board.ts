export interface Board {
  readonly id: number;
  title: string;
  content: string;
  writer: string;
  date: string;
  views: number;
  comment: { name: string; content: string };
}
