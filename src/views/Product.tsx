import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../types";

export const SingleProduct: FC = () => {
  const params = useParams();

  const [product, setProduct] = useState<Product>();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.productId}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  return (
    <div>
      {product?.title}
    </div>
  );
};
