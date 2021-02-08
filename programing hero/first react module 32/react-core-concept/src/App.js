import logo from './logo.svg';
import './App.css';
import ShowData from './component/ShowData';
import Count from './component/Count';
import DataLoad from './component/DataLoad';
import Post from './component/Post';
var nam = [
  { name: 'anwar', age: 19 },
  { name: 'anwara', age: 19 },
  { name: 'anwaraa', age: 19 },
  { name: 'anwaraaa', age: 19 },
  { name: 'anwaraaaa', age: 19 },
  { name: 'anwaraaaaa', age: 19 },

];

function App() {

  return (
    <div>

      <Post/>
      <DataLoad></DataLoad>

      <Count></Count>

      <h1>hello windows</h1>


      {/* {
        nam.map(n => <ShowName nam={n}></ShowName>)
      } */}
      {/* {
        nam.map(n => <ShowData nam={n}></ShowData>)
        
      } */}
    </div>
  )
}

// function ShowName(props) {
//   const { name, age } = props.nam
//   console.log(props.nam.name);
//   return (
//     <div>
//       <h1>Name: {name}</h1>
//       <p>Age : {age}</p>
//     </div>
//   )
// }








export default App;
