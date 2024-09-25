import React, { useContext, useState } from "react";
import classes from "./Payment.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { DataContext } from "../../Components/DataProvider/DataProvider";
import ProductCard from "../../Components/Product/ProductCard";
import {useStripe, useElements, CardElement} from '@stripe/react-stripe-js';
import CurrencyFormat from "../../Components/CurrencyFormat/CurrencyFormat";
import axios from '../../Api/axios'

function Payment() {
  const [{ basket, user }] = useContext(DataContext);
  const [cardError, setcardError] = useState(null)
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  const total = basket.reduce((amount, item) => {
    return item.price * item.amount + amount;
  }, 0);

  const stripe = useStripe();
  const elements = useElements();

  const handlechange= (e)=>{
e?.error?.message ? setcardError(e?.error?.message):setcardError("")
  }

  const handlePayment = async(e)=>{
    e.preventDefault();

    try {
      // backend ...contact to client secret
      const response = await axios({

        method:"POST",
        url : `/payment/create?total=${total*100}`,
      });
      console.log(response.data);
      const clientSecret = response.data?.clientSecret;
      // react side confirmation
      const confirmation = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method:{
            card:elements.getElement(CardElement),
          },
        }
      );
      console.log(confirmation);
      
      


      
    } catch (error) {
      
    }


  }

  return (
    <LayOut>
      <div>
        {/* header */}
        <div className={classes.payment__header}>
          Checkout ({totalItem}) items{" "}
        </div>
        {/* payment */}
        <section className={classes.payment}>
          {/* adress */}
          <div className={classes.flex}>
            <h3>Delivery Address</h3>
            <div>
              <div>{user?.email}</div>
              <div>123 st. number</div>
              <div>Addis Ababa</div>
            </div>
          </div>
          <hr />
          {/* product */}
          <div className={classes.flex}>
            <h3>Review items and delivery</h3>
            <div>
              {basket?.map((item) => (
                <ProductCard product={item} flex={true} />
              ))}
            </div>
          </div>
          <hr />
          {/* card form */}
          <div className={classes.flex}>
            <h3>Payment methods</h3>
            <div className={classes.payment__card__container}>
              <div className={classes.payment__details}>
                <form onSubmit={handlePayment} action="">
                  {/* error */}
                  {cardError && <small style={{color:"red"}}>{cardError}</small>}
                  {/* card element */}
                  <CardElement onChange={handlechange}/>
                  {/* price */}
                  <div className={classes.payment__price}>
                    <div>
                      <span style={{display:"flex",gap:"10px"}}>
                      <p>Total Order |</p>   <CurrencyFormat amount={total}/>
                      </span>
                    </div>
                    <button type="submit">Pay Now</button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </LayOut>
  );
}

export default Payment;
