import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import Reducer from './reducer';

//const store = createStore(Reducer)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
)
