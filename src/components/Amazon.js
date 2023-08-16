import React from 'react'
import '../styles/amazon.css'
import Cards from './Cards'
//import { planteListes } from '../data'

const Amazon = ({planteListes, handleClick }) => {
  return (
    <section>
      {
       planteListes.map((item)=>(
        <Cards item={item} key={item.id} handleClick={handleClick} />
        ))
      }
    </section>
  )
}

export default Amazon
