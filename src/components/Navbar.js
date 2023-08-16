import React from 'react'
import '../styles/navbar.css'

const Navbar = ({ filter , setFiltering, size}) => {
  return (
    <nav>
      <div className="nav_box"> 
        <span className="my_shop" >
            Plantes
        </span>
        <div>
            <input type="search" placeholder="Rechercher" onChange={(e) =>{
              setFiltering(e.target.value.length > 0 )
              filter(e.target.value)
            } }/>
         </div>
        <div className="cart">
           <span>🛒 </span>
           <span>{size}</span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
