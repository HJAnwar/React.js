import logo from './logo.svg';
import './App.css';
import DataLoad from './Component/DataLoad/DataLoad';
import { useEffect, useState } from 'react';
import Data from './Data/Data';
import Cart from './Component/Cart/Cart';
import Header from './Component/Header/Header';

function App() {

 const [data , setData] =useState([]);
  useEffect(()=> {
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => setData(data))

    
  }, []);

//   const [count, setCount] = useState(0);
//   const [population, setPopulation] = useState(0); 

//   const [cart, setCart] = useState([]);

//   const handleCountry = (props)=> {
//     console.log('added', props.population);
//     setCount(count + 1);
//     setPopulation(population + props.population)

//     const newCart = [...cart, props];
//     setCart(newCart);
//   }

  

  //console.log(data);
  return (
    <div>
      <Header/>
      {/* <h1>Count :{count} </h1>
      <h1>population :{population }</h1> */}

      {/* <h1>cart : {cart.length}</h1> */}
      {/* <Cart cart={cart} /> */}
      <DataLoad data={data} />

      {/* {
        data.map(data => <Data data={data} handleClick={handleCountry}/>)
      } */}
      
    </div>
  );
}

export default App;
