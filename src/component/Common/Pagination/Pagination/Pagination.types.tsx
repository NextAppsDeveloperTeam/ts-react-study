export interface PaginationProps {
  total: number;
  page: number;
  limit?: number;
  onPage(page: number): void;
}
