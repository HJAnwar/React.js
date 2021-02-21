import { useEffect, useState } from 'react';

import Header from './Components/Header/Header';
import News from './Components/News/News';

function App() {
  const [data, setData] = useState([])
  console.log(data);

  useEffect(()=> {
    const URL ='http://newsapi.org/v2/everything?q=tesla&from=2021-01-17&sortBy=publishedAt&apiKey=914385e0b631421ea432ed561628cd0a';
    fetch(URL)
    .then(res => res.json())
    .then(data => setData(data.articles))
  },[])
  return (
    <div>
      <Header />
    {
      data.map(news => <News news={news}/>)
    }



    </div>
  );
}

export default App;
