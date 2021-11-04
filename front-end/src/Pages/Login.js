import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import appContext from '../Context/appContext';
import { checkUserAPI } from '../Services/index';

function Login() {
  const { 
    email, 
    setEmail,
    password,
    setPassword,
    loginMessage,
    setLoginMessage
  } = useContext(appContext);
  const history = useHistory();
  const actualURL = history.location.pathname;

  const redirectAfterCheckUser = async (email, password) => {
    const checkedUser = await checkUserAPI(actualURL, email, password);
    console.log(checkedUser, 'DENTRO DO LOGIN RETORNO DA CHECKUSERAPI')
    // if (checkedUser.message) {
    //   // isso seria uma boa prática? Retornar uma função de mudança de estado?
    //   return setLoginMessage('Incorrect email or password');
    // }
    // history.push('/tasks');
  }

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
      <span>{loginMessage ? <p>{loginMessage}</p> : <></>}</span>
      <button
        type="button"
        onClick={ () => redirectAfterCheckUser(email, password) }
      >
        Login
      </button>
      <button
        type="button"
        // aqui eu nao sei se eu deveria colocar logo de cara a funçao history.push() ou criar uma funçao para utilizá-la;
        onClick={ () => history.push('/signup') }
      >
        Sign Up
      </button>
    </div>
  )
}

export default Login;