import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Provider } from 'react-redux'; 
import { createStore } from 'redux';
import allReducers from "./redux/reducers";
// import counterReducer from './redux/actions/reducers/counterReducer';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(allReducers);
root.render(
  // <React.StrictMode>
    // <App />
  // </React.StrictMode>
  <Provider store={store}>
      <App />
    </Provider>
);

// StrictMode means the application is in development mode 

