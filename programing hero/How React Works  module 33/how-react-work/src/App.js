import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';

var nam = [
  { name: 'nam', age: 12 },
  { name: 'nama' },
  { name: 'naam' },
  { name: 'nam' },
  { name: 'naasm' },
  { name: 'nam' },

]
function App() {
  
  return (
    <div>
      <Dataload></Dataload>
      <Friend></Friend>

      {
        nam.map(n => <DataShow me={n}></DataShow>)

      }

    </div>
  );
}


function Dataload() {
  const[data, setData] = useState([]);
  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setData(data))
  }, [])
  return(
    <div>
      <ul>
        {
          data.map(da => <li>{da.name}</li>)
        }
      </ul>
    </div>

  )
}

function Friend() {
  const[count, setCount] = useState(0);
  function onclick() {
     setCount(count + 1)
  }

  return(
    <div>
      <h1> count :{count}</h1>
      <button onClick={onclick}>ADD FD</button>
    </div>
  )
}

function DataShow(props) {
  console.log(props.me.name);
  const { name, age } = props.me;
  return (
    <div>
      <h2>name : {name} </h2>
      <p> age :{age}</p>
    </div>

  )
}

export default App;
