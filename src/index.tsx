import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import CovidTracker from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import mainReducer from './redux/mainReducer';

const store = configureStore({
  reducer: mainReducer
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  // <React.StrictMode>
    <Provider store={store}>
      <CovidTracker />
    </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
