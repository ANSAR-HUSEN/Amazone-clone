import React, { useEffect, useState } from "react";
import classes from "./ProductDetail.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import productUrl from "../../Api/endpoints";
import ProductCard from "../../Components/Product/ProductCard";

function ProductDetail() {
  const { productId } = useParams();
  const [product, setproduct] = useState({});
  useEffect(() => {
    axios.get(`${productUrl}/products/${productId}`)
      .then((res) => {
        console.log(res);
        setproduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

console.log(product);
  return (
    <LayOut>
      <ProductCard product={product} />
      {/* <h1>{product.title}</h1> */}
    </LayOut>
  );
}

export default ProductDetail;
