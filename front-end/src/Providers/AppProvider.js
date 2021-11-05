import appContext from '../Context/appContext';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { checkUserAPI } from '../Services/index';

function AppProvider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [checkUserMessage, setCheckUserMessage] = useState('');
  const history = useHistory();

  
  const redirectAfterCheckUser = async (actualURL, redirectTo, email, password) => {
    const checkedUser = await checkUserAPI(actualURL, email, password);
    if (checkedUser.code !== 200) {
      return setCheckUserMessage(checkedUser.message);
    }
    history.push(`/${redirectTo}`);
  }

  const data = {
    email,
    setEmail,
    password,
    setPassword,
    checkUserMessage,
    setCheckUserMessage,
    redirectAfterCheckUser,
  };

  return (
    <appContext.Provider value={ data }>
      { children }
    </appContext.Provider>
  )
}


export default AppProvider;