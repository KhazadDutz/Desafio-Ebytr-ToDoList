import appContext from '../Context/appContext';
import React, { useState } from 'react';

function appProvider({ children }) {

  const data = {};

  return (
    <appContext.Provider value={ data }>
      { children }
    </appContext.Provider>
  )
}


export default appProvider