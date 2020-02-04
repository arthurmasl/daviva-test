import React from 'react';
import './Header.style.scss';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCartIds } from '../Cars/carsSlice';

const Header = () => {
  const cartIds = useSelector(selectCartIds);

  return (
    <header className="header">
      <h1>1.4 Užduotys</h1>
      <Link to="/">home</Link>
      <Link to="/cart">cart({cartIds.length})</Link>
    </header>
  );
};

export default Header;
