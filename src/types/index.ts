export type Product = {
  id: number;
  title: string;
  [key: string]: any;
};

export interface PaginationI<T = unknown> {
  total: number;
  current: number;
  size: number;
  setPage: (page: number) => void;
  data: T[];
}
