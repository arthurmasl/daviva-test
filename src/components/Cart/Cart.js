import React from 'react';
import { useSelector } from 'react-redux';
import { selectCart, selectFullCartPrice } from './cartSlice';
import './Cart.style.scss';
import TableHead from './TableHead';
import TableItem from './TableItem';

const Cart = () => {
  const cart = useSelector(selectCart);
  const fullPrice = useSelector(selectFullCartPrice);

  if (cart.length) {
    return (
      <React.Fragment>
        <table className="cart-table">
          <TableHead />

          <tbody>
            {cart.map(car => (
              <TableItem {...car} key={car.id} />
            ))}
          </tbody>
        </table>

        <div className="full-price">Visa kaina: {fullPrice.toFixed(2)} €</div>
      </React.Fragment>
    );
  } else {
    return 'cart is empty';
  }
};

export default Cart;
