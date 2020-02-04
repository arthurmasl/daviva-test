import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCart, selectFullCartPrice, removeFromCart } from './cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const cart = useSelector(selectCart);
  const fullPrice = useSelector(selectFullCartPrice);

  const removeHandler = id => {
    dispatch(removeFromCart(id));
  };

  if (cart.length) {
    return (
      <ul>
        {cart.map(car => (
          <li key={car.id}>
            {car.marke} {car.modelis} ({car.metai}) - {car.kaina} €
            <button onClick={() => removeHandler(car.id)}>remove</button>
          </li>
        ))}
        <li>visa kaina: {fullPrice} €</li>
      </ul>
    );
  } else {
    return 'cart is empty';
  }
};

export default Cart;
