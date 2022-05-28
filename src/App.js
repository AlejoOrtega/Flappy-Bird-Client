import React from 'react';
//CSS
import './App.css';
//Route
import { Routes, Route } from 'react-router-dom';
//Components
import Landing from './components/Landing';
import GameView from './components/GameView';



function App() {

  return (
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='game' element={<GameView/>}/>
    </Routes>
    
  );
}

export default App;
