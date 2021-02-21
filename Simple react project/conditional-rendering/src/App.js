import './App.css';
import { useState } from 'react'
import User from './Component/User/User';
function App() {
  const [cart, setCart] = useState([])
  const fd = cart.toString()
  // console.log(cart);
  let friend ;
  if(cart === true){
    friend = <h1>really your my dear friend</h1>
  }else{
    friend= <h1>sorry i don't know you</h1>
  }

  return (
    <div>

     
      <h2>{fd}</h2>
      <button onClick={() => setCart(!cart)}>click me plz</button>

      <h1>{friend}</h1>
      <br/>
      {
        cart ? <h1>tui to tui to</h1>
        : <h1>oy who are you</h1>

      }
      <br/>
      {
        cart && <h1>fb id de </h1>
      }

<User/>
      


    </div>
  );
}

export default App;
