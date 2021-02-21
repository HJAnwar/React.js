import  {Button}  from '@material-ui/core';
import './App.css';
import Header from './Components/Header/Header';
import { useEffect, useState } from 'react';
import News from './Components/News/News';

function App() {
  const [data, setData] = useState([]);
  console.log(data);
  useEffect(()=> {
    const url= 'http://newsapi.org/v2/everything?q=tesla&from=2021-01-17&sortBy=publishedAt&apiKey=914385e0b631421ea432ed561628cd0a';
    fetch(url)
    .then(res => res.json())
    .then(data => setData(data.articles))

  },[])
  return (
    <>
  
      <Header/>
      {
        data.map(data => <News data={data} />)
      }

    </>
  );
}

export default App;
