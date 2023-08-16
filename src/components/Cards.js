import React from 'react'
import '../styles/cards.css'
import Care from './Care';
//import Carescale from './Carescale';

const Cards = ({item , handleClick}) => {
    const {nom, lumiere, eau,prix, img} = item;
  return (
    <div className="cards">
        <div className="image_box">
          <img src={img} alt="Image" />
        </div>
        <div className="details">
            <p>{nom}</p>
            <Care careType='eau' value={eau}/>
            <Care careType='lumiere' value={lumiere}/>
            <p>{prix} ariary</p>
            <button onClick={() => handleClick(item)}>Add to Cart</button>
        </div>
    </div>
  )
}

export default Cards
