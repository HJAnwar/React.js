import { createContext, useState } from 'react';
import './App.css';

import Home from './Component/Home/Home';
import User from './Component/User/User';

export const Hello = createContext()

function App() {
  const [ a, b ] = useState([])
  return (
    <Hello.Provider value={[a, b]}>
      <Home/>
      <User/>
    </Hello.Provider>
  );
}

export default App;
