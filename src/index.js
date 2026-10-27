import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Signup from './Signup'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App color="green" size="11" onClickEvent={()=>{
      console.log(("this is my onClickEvent of app!!"))
    }} /> */}
    {/* <MyComponent/> */}
    <Signup/>
  </React.StrictMode>
);

