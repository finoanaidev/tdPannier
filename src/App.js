import React , {useState, useEffect} from 'react';
import Navbar from './components/Navbar'
import Amazon from './components/Amazon'
import Cart from './components/Cart'
import './styles/amazon.css'
import { planteListes } from './data'
import './App.css'


const App= () => {
  const [isFiltering, setFiltering] = useState(false);
  const [filtered, setFiltered] = useState(false);
  const [cart , setCart] = useState([]);
  const [warning, setWarning] = useState(false);



  const filterResults = input => {
    let fullList = planteListes.flat()
    let results = fullList.filter(item => {
      const name = item.nom.toLowerCase();
      const term = input.toLowerCase()
      return name.indexOf(term) > -1
    })
    setFiltered(results)
  }

  useEffect( () => {
    console.log(isFiltering)
  } )

  const handleClick = (item) => {
     let isPresent = false;
     cart.forEach((product) => {
      if (item.id === product.id)
      isPresent = true;
     })
     if (isPresent){
      setWarning(true);
      setTimeout(()=> {
        setWarning(false);
      },2000);
      return;
     }
     setCart([...cart, item]);
  }
  const handleChange = (item ,d) =>{
    let ind = -1;
    cart.forEach((data,index)=>{
      if(data.id === item.id)
      ind = index;
    });
    const tempArr = cart;
    tempArr[ind].amount += d; 

    if(tempArr[ind].amount === 0)
    tempArr[ind].amount = 1;
    setCart([...tempArr]);

   
  }
  return (
    <React.Fragment>
       <Navbar filter={filterResults} size={cart.length} setFiltering={setFiltering}/>
      
      <div className="outer-container">
        <div className="sidebar">
        <Cart cart={cart} setCart={setCart} handleChange={handleChange}/>
        </div>
        <div className="content">
        <Amazon handleClick={handleClick} planteListes ={isFiltering ? filtered : planteListes } />
           { 
        warning && <div className="warning">Item is already added to your cart</div>
      }
        </div>
      </div> 
    </React.Fragment>
    
  )
}

export default App
