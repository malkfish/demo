import * as React from "react";
import { Routes ,Route } from 'react-router-dom';

import Landing from "./components/layout/Landing";
import Login from "./components/auth/Login";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landing/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
