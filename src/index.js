import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

//Router
import { BrowserRouter} from 'react-router-dom';

//Redux
import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import birdReducer from './components/stores/birdPosition';
import blockReducer from './components/stores/blockConfig';
import pointsReducer from './components/stores/points';
import gameReducer from './components/stores/gameState';
import userReducer from './components/stores/user'

const store = configureStore({
  reducer: {
    bird : birdReducer,
    block : blockReducer,
    points: pointsReducer,
    game : gameReducer,
    user : userReducer
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      {/* <React.StrictMode> */}
        <App />
      {/* </React.StrictMode> */}
    </Provider>
  </BrowserRouter>
);


