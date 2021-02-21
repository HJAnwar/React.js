import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import User from './Compnent/User/User';
import Header from './Compnent/Header/Header';
import UserDetail from './Compnent/UserDetail/UserDetail';

function App() {
  return (
    <div>
      <Header/>
      <User/>
      <Router>
        <Switch>
          <Route path="/home">
            <User/>
          </Route>
          {/* <Route path="/detail/:info">
            <UserDetail/>
          </Route> */}
          <Route exact path="/">
            <User/>
          </Route>
          <Route path="*">
            <User/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
