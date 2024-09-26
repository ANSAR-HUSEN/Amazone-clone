import React from "react";
import Rating from "@mui/material/Rating";
import CurrencyFormat from "../CurrencyFormat/CurrencyFormat";
import classes from "./Product.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";

function ProductCard({ product, flex, renderDesc,renderAdd }) {
  const { image, id, rating, price, title, description } = product;

  const [state, dispatch] = useContext(DataContext);

  // console.log(state);

  const addIoCart = () => {
    dispatch({
      type: Type.ADD_TO_BASKET,
      item: {
        image,
        id,
        rating,
        price,
        title,
        description,
      },
    });
  };

  return (
    <div
      className={`${classes.card__container} ${
        flex ? classes.flexed__container : ""
      }`}
    >
      <Link to={`products/${id}`}>
        <img src={image} alt="" />
      </Link>
      <div>
        <h3>{title}</h3>
        {renderDesc && <div style={{ maxWidth: "750px" }}>{description}</div>}
        <div className={classes.rating}>
          {/* rating */}
          <Rating value={rating?.rate} precision={0.1} />
          {/* count */}
          <small>{rating?.count}</small>
        </div>
        <div>
          {/* price */}
          <CurrencyFormat amount={price} />
        </div>
        {renderAdd && (<button className={classes.button} onClick={addIoCart}>Add to Cart</button>)}
        
      </div>
    </div>
  );
}

export default ProductCard;
