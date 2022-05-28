import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import {configureStore} from '@reduxjs/toolkit'
import {Provider} from 'react-redux'
import birdReducer from './components/stores/birdPosition';
import blockReducer from './components/stores/blockConfig';

const store = configureStore({
  reducer: {
    bird : birdReducer,
    block : blockReducer,
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);


