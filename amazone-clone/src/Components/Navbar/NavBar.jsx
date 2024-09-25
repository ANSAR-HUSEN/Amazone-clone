import React from "react";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import { Link } from "react-router-dom";

import classes from "./NavBar.module.css";
import LowerNav from "./LowerNav";
import { useContext } from "react";
import { DataContext } from "../DataProvider/DataProvider";
import {auth} from "../../Utility/firebase";

function NavBar() {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  console.log(basket.length);
  const totalItem = basket.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  return (
    <section className={classes.fixed}>
      <section>
        <div className={classes.header__container}>
          <div className={classes.logo__container}>
            {/* logo */}
            <Link to="/">
              <img
                src="https://www.pngall.com/wp-content/uploads/15/Amazon-Logo-White-Transparent.png"
                alt=""
              />
            </Link>
            {/* delivery */}
            <div className={classes.delivery}>
              <span>
                {/* icon */}
                <SlLocationPin />
              </span>
              <div>
                <p>Deliver to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          <div className={classes.search}>
            {/* search bar */}
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" placeholder="Search Amazon" />
            {/* search icon */}
            <BsSearch size={38} />
          </div>
          {/* right side */}
          <div className={classes.order__container}>
            <Link to="/" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1024px-Flag_of_the_United_States.svg.png"
                alt=""
              />
              <select name="" id="flag">
                <option value="">EN</option>
              </select>
            </Link>

            {/*  */}
            <Link to={!user && "/auth"}>
              <div>
                <div>
                  {user ? (
                    <>
                      <p>Hello {user?.email?.split("@")[0]}</p>
                      <span onClick={()=>auth.signOut()}>Sign Out</span>
                    </>
                  ) : (
                    <>
                      <p>Hello, Sign in</p>
                      <span>Account & Lists</span>
                    </>
                  )}
                </div>
              </div>
            </Link>
            {/* order */}
            <Link to="/orders">
              <p>Returns</p>
              <span>& Orders</span>
            </Link>
            {/* cart */}
            <Link to="/cart" className={classes.cart}>
              {/* icon */}
              <BiCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <LowerNav />
    </section>

    //    <div className='nav'>
    //      <div className='outer-left-nav'>
    //         <div className='left-nav'>
    //             <div className='logo'>
    //                <a href="#"> <img src="https://www.pngall.com/wp-content/uploads/15/Amazon-Logo-White-Transparent.png" alt="logo" /></a>

    //         </div>
    //             <div className='destination'>
    //                <a href="#"> <span><PinDropOutlinedIcon/></span>

    //                     <div><p>Deliver to</p>
    //                     <span>Ethiopia</span></div></a>
    //                 </div>

    //             </div>

    //         </div>
    //         {/* <div className='outermid'>
    //         <div className='mid-nav'>
    //             <div className='all'>
    //                <div> <p>All </p></div>

    //                 <div className='drop'><ArrowDropDownOutlinedIcon/></div>

    //             </div>
    //             <div className='input'>
    //             <input type="text"  placeholder='Search Amazone'/>

    //             </div>
    //             <div className='search-icon'>

    //             <SearchOutlinedIcon/>
    //             </div>

    //         </div>
    //         </div> */}

    //         {/* <div className='right-nav'>
    //             <div className='flag-lang'>
    //                 <div className='flag'>
    //                     <img src="https://png.pngtree.com/png-vector/20230905/ourmid/pngtree-us-flag-sign-png-image_9947494.png" alt="flag" />
    //                 </div>
    //                 <div><p>EN</p></div>
    //                 <div className='icon-lang'><ArrowDropDownOutlinedIcon /></div>

    //             </div >
    //             <div className='signin'>
    //                 <a href="#">
    //                     <p>Hello, Sign in</p>
    //                     <div className='account'>
    //                     <h4>Account & Lists </h4>
    //                     <p><ArrowDropDownOutlinedIcon /></p>
    //                     </div>

    //                 </a>

    //             </div>
    //             <div className='order'>
    //                 <p>Returns</p>
    //                 <h4>& Orders</h4>

    //             </div>
    //             <div className='cart'>
    //                 <img src={cart}alt="" />

    //             </div>

    //         </div> */}

    //     </div>
  );
}

export default NavBar;
