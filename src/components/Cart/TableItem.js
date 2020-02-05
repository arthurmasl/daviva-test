import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from './cartSlice';

const TableItem = ({ marke, modelis, metai, kaina, id }) => {
  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <tr>
      <td>{marke}</td>
      <td>{modelis}</td>
      <td>{metai}</td>
      <td>{kaina} €</td>
      <td>
        <button onClick={removeHandler}>remove</button>
      </td>
    </tr>
  );
};

export default TableItem;
