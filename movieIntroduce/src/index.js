import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


// import "./styles.css";  : index.js에서 import하면 모든 요소에 적용이 된다.


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);