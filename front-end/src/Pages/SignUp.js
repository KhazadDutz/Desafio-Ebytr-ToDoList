import React, { useContext } from 'react';
import appContext from '../Context/appContext';

function SignUp() {
  const { setEmail, setPassword } = useContext(appContext);

  return (
    <div>
      <h1>This is my SignUp Page</h1>
    </div>
  )
}

export default SignUp;