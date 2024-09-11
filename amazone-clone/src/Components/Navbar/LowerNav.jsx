import React from 'react'
import { AiOutlineMenuUnfold } from "react-icons/ai";
import classes from './NavBar.module.css'

function LowerNav() {
  return (
    <div className={classes.lower_nav}>
        <ul>
            <li>
                < AiOutlineMenuUnfold size={20}/>
                <p>All</p>
            </li>
            <li>Today's Deal</li>
            <li>Costumer Service</li>
            <li>Registry</li>
            <li>Gift Cards</li>
            <li>Sell</li>
        </ul>
    </div>
  )
}

export default LowerNav