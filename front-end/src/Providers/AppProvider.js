import appContext from '../Context/appContext';
import React, { useState } from 'react';

function AppProvider({ children }) {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const data = {
    login,
    setLogin,
    password,
    setPassword,
  };

  return (
    <appContext.Provider value={ data }>
      { children }
    </appContext.Provider>
  )
}


export default AppProvider;