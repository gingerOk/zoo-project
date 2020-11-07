import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import {UserProvider} from "./contexts/UserContext"

const Providers = () => (
  <UserProvider>
    <App />
  </UserProvider>
);

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Providers />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
