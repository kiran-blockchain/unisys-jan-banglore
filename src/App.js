import React from 'react';
import './App.css';
import { Header } from './components/header';
import Register from './components/register';

const App =()=> {

  return (
    <div className="App">
     <Header/>
     <Register/>
    </div>
  );
}

export default App;
