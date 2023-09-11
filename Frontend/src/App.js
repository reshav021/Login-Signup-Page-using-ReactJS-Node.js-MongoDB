import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import LoginSignup from './components/LoginSignup';
import Home from './components/Home'

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
            <Route path='/' element={<LoginSignup />} />
            <Route path='/home' element={<Home />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
