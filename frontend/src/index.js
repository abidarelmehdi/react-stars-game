import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/main.css';
import Button from "./components/Button";

ReactDOM.render(
  <React.StrictMode>
    <Button label="Click Here" />
  </React.StrictMode>,
  document.getElementById('root')
);
