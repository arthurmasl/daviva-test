import { configureStore } from '@reduxjs/toolkit';
import carsReducer from '../components/Cars/carsSlice';
import cartReducer from '../components/Cart/cartSlice';

const store = configureStore({
  reducer: {
    cars: carsReducer,
    cart: cartReducer
  }
});

export default store;
