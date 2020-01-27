import { configureStore } from '@reduxjs/toolkit';
import carsReducer from '../components/Cars/carsSlice';

const store = configureStore({
  reducer: {
    cars: carsReducer
  }
});

export default store;
