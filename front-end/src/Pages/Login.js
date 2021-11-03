import React, { useContext } from 'react';
import appContext from '../Context/appContext';

function Login() {
  const { setEmail, setPassword } = useContext(appContext);

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
        // onClick={ () => função de requisição para verificar email }
      >
        Login
      </button>
    </div>
  )
}

export default Login;