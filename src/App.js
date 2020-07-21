import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Route,} from 'react-router-dom'
import Home from './components/homepage'

function App() {
  return (
    <Route exact path="/" component={Home} /> 
    
     );
}

export default App;