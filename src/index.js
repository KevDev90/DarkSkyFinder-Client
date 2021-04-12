import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./App/App";
import { BrowserRouter } from "react-router-dom";
import { usePromiseTracker } from "react-promise-tracker";
import MoonGif from "../src/moon.gif"
const LoadingIndicator = props => {
     const { promiseInProgress } = usePromiseTracker();
  
     return (
       promiseInProgress && 
       <div className='loader-container'>
       <img src={MoonGif} className='loader-icon' alt='loading' />
       </div>
    );  
   }

ReactDOM.render(
  <BrowserRouter>
    <App />
    <LoadingIndicator/>
  </BrowserRouter>,
  document.getElementById('root')
);


