import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import appContext from '../Context/appContext';
import { checkUserAPI } from '../Services/index';

function SignUp() {
  const [signUpMessage, setSignUpMessage] = useState('');
  const { 
    email, 
    setEmail,
    password,
    setPassword,
  } = useContext(appContext);
  const history = useHistory();
  const actualURL = history.location.pathname;

  const redirectAfterCheckUser = async (email, password) => {
    const checkedUser = await checkUserAPI(actualURL, email, password);
    if (checkedUser.message) {
      // isso seria uma boa prática? Retornar uma função de mudança de estado?
      return setSignUpMessage('Insert a valid email or password');
    }
    history.push('/');
  }

  return (
    <div>
      <h1>Organize your Tasks easily</h1>
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
      <span>{signUpMessage ? <p>{signUpMessage}</p> : <></>}</span>
      <button
        type="button"
        onClick={ () =>  redirectAfterCheckUser(email, password) }
      >
        SignUp
      </button>
    </div>
  )
}

export default SignUp;