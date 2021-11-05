import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router';
import appContext from '../Context/appContext';

function Login() {
  const { 
    email, 
    setEmail,
    password,
    setPassword,
    checkUserMessage,
    setCheckUserMessage,
    redirectAfterCheckUser,
  } = useContext(appContext);
  const history = useHistory();
  const actualURL = history.location.pathname;

  useEffect(() => {
    setCheckUserMessage('');
  }, []);

  return (
    <div>
      <h1>Login to organize your tasks</h1>
      <label htmlFor="email">
        Email
        <input 
          id="email"
          type="text"
          name="email-input"
          onChange={ ({ target: { value } }) => setEmail(value) }
        />
      </label>
      <label htmlFor="password">
        Password
        <input 
          id="password"
          type="password"
          name="password-input"
          onChange={ ({ target: { value } }) => setPassword(value) }
        />
      </label>
      <span>{checkUserMessage ? <p>{checkUserMessage}</p> : <></>}</span>
      <button
        type="button"
        onClick={ () => redirectAfterCheckUser(actualURL, 'tasks' ,email, password) }
      >
        Sign In
      </button>
    </div>
  )
}

export default Login;