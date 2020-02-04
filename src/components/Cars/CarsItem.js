import React from 'react';
import Gallery from '../Gallery/Gallery';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart, selectIsInCart } from '../Cart/cartSlice';

const CarsItem = ({ marke, modelis, metai, nuotraukos, kaina, id }) => {
  const dispatch = useDispatch();
  const isInCart = useSelector(selectIsInCart(id));

  const addHandler = () => {
    dispatch(addToCart(id));
  };

  const removeHandler = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="cars-item">
      <Gallery images={nuotraukos}></Gallery>
      <div className="cars-item__details">
        <h3>{marke}</h3>
        <ul>
          <li>Modelis: {modelis}</li>
          <li>Metai: {metai}</li>
        </ul>
        <div className="price">{kaina} €</div>
        <Link to={`/car/${id}`}>detail</Link>
        {!isInCart ? (
          <button onClick={addHandler}>add to cart</button>
        ) : (
          <button onClick={removeHandler}>remove from cart</button>
        )}
      </div>
    </div>
  );
};

export default CarsItem;
