// import logo from './logo.svg';
// import './App.css';
import React from "react";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//          This is my first change in React App !!
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


// function App(props)
// {
//   console.log("colour:" ,props.color)
//   console.log("colour:" ,props.size)
//   return
//   <div>
//      <h1 style={{color:props.color}}>This is my functional component</h1>
//   <br></br>
//   <button onClick={()=> props.onClickEvent()}>MyButton</button>
//   </div>
// }

class App extends React.Component{
  constructor(props)
  {
    super(props)
    this.state = {
    counter: 0
  };
  }
  render()
    {
      return <div>
       
        <h1 style={{color:this.props.color}}>Hello class componentt</h1>
      <br/>
   <button onClick={() => this.props.onClickEvent()}>MyButton</button>
   
   <div>
    Counter : (this.state.counter)
    <br/>
    <button onClick = {() =>{
      this.setState({counter:(this.setState.counter + 1)});
    }}>Increment</button>
   </div>
   </div>
    }
  
}
export default App;
