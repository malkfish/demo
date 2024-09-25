import * as React from "react";
import { Routes ,Route } from 'react-router-dom';

import Profile from "./components/layout/Profile";
import Login from "./components/auth/Login";

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </div>
  );
}

export default App;
