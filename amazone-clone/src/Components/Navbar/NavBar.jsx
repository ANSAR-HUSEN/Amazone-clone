import React from 'react'
import {SlLocationPin} from 'react-icons/sl'
import './NavBar.css'

function NavBar() {
  return (
    <div className='nav'>
        <div className='left-nav'>
            <div className='logo'>
               <a href="#"> <img src="https://www.pngall.com/wp-content/uploads/15/Amazon-Logo-White-Transparent.png" alt="logo" /></a>

        </div>
            <div className='destination'>
                <span>{SlLocationPin}</span>
                <div>
                    <p>Deliver to</p>
                    <span>Ethiopia</span>
                </div>

            </div>

        </div>
        <div className='mid-nav'>

        </div>
        <div className='right-nav'>

        </div>

    </div>
  )
}

export default NavBar