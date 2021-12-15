import { useEffect, useState } from "react";
import { PaginationI } from "../types";

const pageSize = 5;

export const usePagination = <T>(data: T[]): PaginationI<T> => {
  const [pagination, setPagination] = useState({
    total: data.length / pageSize,
    current: 0,
    size: pageSize,
  });

  useEffect(() => {
    setPagination((old) => ({
      ...old,
      total: data.length / pageSize,
    }));
  }, [data]);

  const setPage = (page: number): void => {
    setPagination((old) => ({
      ...old,
      current: page,
    }));
  };

  return {
    ...pagination,
    setPage,
    data: data.slice(pagination.current * pagination.size, (pagination.current + 1) * pagination.size),
  };
};
