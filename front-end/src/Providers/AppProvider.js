import appContext from '../Context/appContext';
import React, { useState } from 'react';

function AppProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const data = {
    email,
    setEmail,
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