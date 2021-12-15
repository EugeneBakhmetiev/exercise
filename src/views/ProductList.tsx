import { FC, useContext } from "react";
import { Link } from "react-router-dom";
import { Pagination } from "../components/Pagination";
import { ProductContext } from "../containers";

export const ProductList: FC = () => {
  const { data, total, current, setPage } = useContext(ProductContext);

  return (
    <div>
      <ul>
        {data.map((product) => {
          return (
            <li key={`product_${product.id}`}>
              <Link to={`/products/${product.id}`}>{product.title}</Link>
            </li>
          );
        })}
      </ul>

      <Pagination total={total} current={current} setPage={setPage} />
    </div>
  );
};
