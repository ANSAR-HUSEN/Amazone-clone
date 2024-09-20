import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import classes from "./Product.module.css";
import Loader from "../Loader/Loader";

function Product() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        console.log(res);
        setProduct(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  console.log(product);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className={classes.products__container}>
          {product.map((singleProduct, index) => (
            <ProductCard product={singleProduct} key={singleProduct.id} renderAdd={true}/>
          ))}
        </section>
      )}
    </>
  );
}

export default Product;
