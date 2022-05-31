import React from 'react';
//CSS
import './App.css';
//Route
import { Routes, Route } from 'react-router-dom';
//Components
import Landing from './components/Landing';
import GameView from './components/GameView';
import LeaderBoard from './components/LeaderBoard';
import UserSetting from './components/UserSetting';



function App() {

  return (
    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='game' element={<GameView/>}/>
      <Route path='user_settings' element={<UserSetting/>}/>
      <Route path='leader_board' element={<LeaderBoard/>}/>
      
    </Routes>
    
  );
}

export default App;
