import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Context, { FirebaseContext } from './store/Context';

import firebase from './Components/firebase/config'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={{firebase}}>
      <Context>
      <App />
      </Context>
    </FirebaseContext.Provider>
  </React.StrictMode>
);

