import React from 'react'
import NavBar from '../Navbar/NavBar'

function LayOut({children}) {
  return (
    <div>
        <NavBar/>
        {children}
    </div>
  )
}

export default LayOut