import React from 'react';
import { getCar } from '../Cars/getCar';

import { selectCarsData, selectIsLoaded } from '../Cars/carsSlice';
import { useDispatch, useSelector } from 'react-redux';
import CarsItem from './CarsItem';
import './Cars.style.scss';

const Cars = () => {
  const cars = useSelector(selectCarsData);
  const isLoaded = useSelector(selectIsLoaded);
  const dispatch = useDispatch();

  const addHandler = () => {
    dispatch(getCar);
  };

  return (
    <div className="cars">
      <div className="cars-grid">
        {cars.map((item, i) => (
          <CarsItem key={i} {...item} />
        ))}
      </div>

      <button className="get-button" onClick={addHandler} disabled={!isLoaded}>
        {isLoaded ? 'Prideti' : 'Kraunama..'}
      </button>
    </div>
  );
};

export default Cars;
