import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';
import { auth } from './components/firebase';
import { useStateValue } from './context/StateProvider';

const App = () => {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('THE USER IS >>>', authUser);

      if (authUser) {
        // the user just logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className='app'>
        <Header />
        <Switch>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/checkout'>
            <Checkout />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
