
import { useEffect, useState } from 'react';
import FakeData from './FakeData.json'
import './App.css';
import User from './Component/Header/User/User';
import Cart from './Component/Cart/Cart';
import Header from './Component/Header/Header';

function App() {
  const [user, setUser] = useState([])

  useEffect(() => {
    setUser(FakeData)
  }, 0)

  const [count, setCount] = useState(0);
  const [userInfo, setUserInfo] = useState(0)

  const addClick = (props) => {
    console.log(props.Sellary);
    setCount(count + 1)
    setUserInfo(userInfo + props.Sellary)

  }


  return (


    <div>
      <Header/>
      <div className="user-container">
        <div className="user-info">
          <h1>Load User: {user.length} </h1>
          {
            user.map(data => <User data={data} addClick={addClick} />)
          }
        </div>

        <div className=" addUser-info">
          {/* <h3>Add User : {count}</h3>
        <h4> Total Yearly Salary : {userInfo}</h4> */}
          <Cart count={count} userInfo={userInfo} />
        </div>


      </div>
    </div>
  );
}

export default App;
