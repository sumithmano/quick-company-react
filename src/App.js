import React, { useEffect, useState } from 'react';
import Main from './components/Main'
import Navbar from './components/Navbar'
import './App.css';
import UserService from './services/UserService'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Main />
      </div>
    </div>
  );
}

export default App;
