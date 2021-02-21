import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([])
  console.log(data);
  useEffect(()=>{
    const url = 'http://newsapi.org/v2/everything?q=tesla&from=2021-01-18&sortBy=publishedAt&apiKey=914385e0b631421ea432ed561628cd0a';
    axios(url)
    
    .then(data => setData(data.data.totalResults))
  },[])

  return (
    <div>
<h1>a{data.length}</h1>
      <Header />
    </div>
  );
}

export default App;
