import React, { useEffect } from 'react';
import './App.style.scss';

import Header from '../Header/Header';
import Cars from '../Cars/Cars';
import Details from '../Details/Details';

import { Switch, Route } from 'react-router-dom';
import { getCar } from '../Cars/getCar';
import { useDispatch } from 'react-redux';
import Cart from '../Cart/Cart';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCar);
  }, [dispatch]);

  return (
    <div className="app-wrapper">
      <Header />

      <Switch>
        <Route exact path="/">
          <Cars />
        </Route>
        <Route path="/car/:id">
          <Details />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
