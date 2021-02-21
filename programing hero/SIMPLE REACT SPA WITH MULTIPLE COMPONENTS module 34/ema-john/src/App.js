import logo from './logo.svg';
import './App.css';
import Header from './component/Header/Header';
import Shop from './component/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from './component/Review/Review';
import Inventory from './component/Inventory/Inventory';
import Nofound from './component/Nofound/Nofound';
import ProducrDetail from './component/ProductDetals/ProducrDetail';

function App() {
  return (

    <div>
      <Header></Header>

      <Router>
        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/review">
            <Review />
          </Route>
          <Route path="/inventory">
            <Inventory />
          </Route>
          <Route path='/product/:productKey'>
            <ProducrDetail/>
          </Route>
          <Router exact path='/'>
            <Shop />
          </Router>
          <Route path="*">
            <Nofound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
