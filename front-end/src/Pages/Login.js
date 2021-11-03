import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import appContext from '../Context/appContext';
import { checkUserAPI } from '../Services/index';

function Login() {
  const { email, setEmail, setPassword, password } = useContext(appContext);
  const history = useHistory();
  const actualURL = history.location;

  return (
    <div>
      <h1>This is my Login Page</h1>
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
      <button
        type="button"
        onClick={ () => checkUserAPI(actualURL, email, password) }
      >
        Login
      </button>
    </div>
  )
}

export default Login;