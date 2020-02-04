import { createSlice, createSelector } from '@reduxjs/toolkit';
import shortid from 'shortid';

const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    cars: [],
    cart: [],
    isLoaded: false
  },
  reducers: {
    addCar(state, action) {
      state.cars.push({
        ...action.payload,
        id: shortid.generate()
      });
    },

    setDataLoaded(state, action) {
      state.isLoaded = action.payload;
    },

    addToCart(state, action) {
      if (!state.cart.includes(action.payload)) {
        state.cart.push(action.payload);
      }
    },

    removeFromCart(state, action) {
      state.cart = state.cart.filter(c => c !== action.payload);
    }
  }
});

export const selectCarsData = state => state.cars.cars;
export const selectCartIds = state => state.cars.cart;
export const selectIsLoaded = state => state.cars.isLoaded;
export const selectCar = id =>
  createSelector(selectCarsData, cars => cars.find(c => c.id === id) || {});

export const { addCar, setDataLoaded } = carsSlice.actions;
export default carsSlice.reducer;
