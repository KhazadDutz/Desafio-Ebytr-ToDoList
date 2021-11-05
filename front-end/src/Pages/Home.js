import React from 'react';
import { useHistory } from 'react-router';

function Home() {
  const history = useHistory();
  return (
    <div>
      <h3>Sign In now and organize your daily tasks</h3>
      <button 
        type='button'
        onClick={ () => history.push('/login') }
      >
        Sign In
      </button>
      <h4>Join EasyTasksDone now and start being more productive.</h4>
      <button 
        type='button'
        onClick={ () => history.push('/register') }
      >
        Register Now
      </button>
    </div>
  )
}

export default Home;