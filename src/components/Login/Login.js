import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import { auth } from '../firebase';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) history.push('/');
      })
      .catch((error) => alert(error.message));

    ///Firebase
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // If successful create a new use with email and password
        if (auth) {
          history.push('/');
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className='login'>
      <Link to='/'>
        <img
          className='login__logo'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
          alt='fake amazon clone'
        />
      </Link>
      <div className='login__container'>
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type='submit'
            onClick={signIn}
            className='login__signInButton'
          >
            Sign In
          </button>
        </form>
        <p>
          By signing-in you agree to THE FAKE AMAZONE CLONE Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies notice and our
          Interest-based ads
        </p>
        <button onClick={register} className='login__registerButton'>
          Create account!
        </button>
      </div>
    </div>
  );
};

export default Login;
