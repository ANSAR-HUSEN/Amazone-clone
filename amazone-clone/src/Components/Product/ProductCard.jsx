import React from 'react'
import Rating from '@mui/material/Rating';
import CurrencyFormat from '../CurrencyFormat/CurrencyFormat';
import classes from './Product.module.css'
import { Link } from 'react-router-dom';



function ProductCard({product}) {
    const {image,id,rating,price,title}=product;
  return (
    <div className={classes.card__container}>
        <Link to={`products/${id}`}>
            <img src={image} alt="" />
        </Link>
        <div>
            <h3>{title}</h3>
            <div className={classes.rating}>
                {/* rating */}
                <Rating value={rating?.rate} precision={0.1}/>
                {/* count */}
                <small>{rating?.count}</small>
            </div>
            <div>
                {/* price */}
                <CurrencyFormat amount={price}/>
            </div>
            <button>
                Add to Cart
            </button>


        </div>




    </div>
  )
}

export default ProductCard