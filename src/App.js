import React from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import List from './components/List';
import Coupon from './components/Coupon';
function App() {
  return (
    <div className="App">
     <h2>E-Commerce Cart Counting</h2> 
     <Counter />
    <List/>
    <br/>
    <br/>
    <br/>
    <Coupon/> 
    
      </div>
  );
}

export default App;
