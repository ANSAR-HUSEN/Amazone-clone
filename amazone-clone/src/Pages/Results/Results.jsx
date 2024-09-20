import React, { useEffect, useState } from "react";
import classes from "./Results.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import productUrl from "../../Api/endpoints";
import ProductCard from "../../Components/Product/ProductCard";
import Loader from "../../Components/Loader/Loader";

function Results() {
  const { categoryName } = useParams();
  const [Results, setResults] = useState([]);
  console.log(categoryName);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        console.log(res);
        setResults(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <LayOut>
      {loading ? (
        <Loader />
      ) : (
        <section>
          <h1 style={{ padding: "30px", textAlign: "center" }}>Results</h1>
          <p style={{ padding: "30px", textAlign: "center" }}>
            Category/{categoryName}
          </p>
          <hr />
          <div className={classes.products__container}>
            {Results.map((product) => (
              <ProductCard key={product.id} product={product} renderAdd={true} />
            ))}
          </div>
        </section>
      )}
    </LayOut>
  );
}

export default Results;
