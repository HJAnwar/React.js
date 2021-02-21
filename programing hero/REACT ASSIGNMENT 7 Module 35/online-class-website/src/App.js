import { useEffect, useState } from 'react';
import './App.css';
import Cart from './Component/Header/Cart/Cart';
import Course from './Component/Header/Course/Course';
import Header from './Component/Header/Header';
import FakeData from './FakeData.json';

function App() {


  const [data, setData] = useState([])

  const [AddCart, setCart] = useState([])
  const [tk, setTk] = useState(0)
  const [count, setCount] = useState([])


 
  useEffect(() => {
    setData(FakeData)
  }, [])


  function addCourse(props) {
    setCart(AddCart + 1)
    setTk(tk + props.price);
    const newCart = [...count, props]
    setCount(newCart);
   

  }
const [total, setTotal] = useState ([])

  function deleteCourse(props) {
    const id = props.id;
     const price = props.price;
     
  
    document.getElementById(`${id}`).style.display= "none";
   
  }
  
  return (

    <div>
      <Header />
      <div className="app">

        <div className="CartStyle2">
          {
            data.map(data => <Course data={data} addCourse={addCourse} />)
          }
        </div>
        <div className="CartStyle">
          <h1>Add Course: {AddCart.length} </h1>
          <h2>Total Tk: {tk}</h2>
          
          {
            count.map(count => <Cart count={count}  deleteCourse={deleteCourse}/>)
          }
        </div>


      </div>
    </div>
  );
}

export default App;
//npm i --save @fortawesome/fontawesome-svg-core @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome