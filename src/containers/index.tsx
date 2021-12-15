import { createContext, FC, useEffect, useState } from 'react';
import { usePagination } from '../hooks/usePagination';
import { PaginationI, Product } from '../types';

type ProductContextI = PaginationI<Product>;

export const ProductContext = createContext<ProductContextI>({
  size: 0,
  total: 0,
  current: 0,
  setPage: () => {},
  data: [],
});

export const ProductProvider: FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const pagination = usePagination(products);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <ProductContext.Provider value={pagination}>
      {children}
    </ProductContext.Provider>
  )
};
