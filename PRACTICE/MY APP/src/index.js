import React from 'react';
import ReactDOM from 'react-dom'; //it is used by dom no need to use manually
import './index.css'; //Even this no need to use manually 
// This css file work for whole dom
import App from './App'; // This app we are going to call and use 
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />   
  {/* This App component is aclled and used here  */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
