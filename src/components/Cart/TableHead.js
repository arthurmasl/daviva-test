import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeSort, selectSortType } from './cartSlice';

const TableHead = () => {
  return (
    <thead>
      <tr>
        <td>
          <SortButton name="marke" />
        </td>
        <td>
          <SortButton name="modelis" />
        </td>
        <td>
          <SortButton name="metai" />
        </td>
        <td>
          <SortButton name="kaina" />
        </td>
        <td>Action</td>
      </tr>
    </thead>
  );
};

const SortButton = ({ name }) => {
  const dispatch = useDispatch();
  const sortType = useSelector(selectSortType);

  const sortHandler = () => {
    dispatch(changeSort(name));
  };

  return (
    <button onClick={sortHandler}>
      {name}
      {sortType === name && '+'}
    </button>
  );
};

export default TableHead;
