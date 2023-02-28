// Author: Dhruvil Trivedi
// This the App.js page where the login and registration stays

import React, { useState } from 'react';
import './App.css';
import { Login } from './login';
import { Register } from './register';

function App() {
  const [currentForm, setCurrentFrom] = useState('login');
  
  const toggleForm = (formName) => {
    setCurrentFrom(formName);
  }

  return (
    <div className="App">
      {
        currentForm === 'login'? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm}/>
      }
    </div>
  );
}

export default App;
