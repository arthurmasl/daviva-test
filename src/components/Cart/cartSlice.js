import { createSlice, createSelector } from '@reduxjs/toolkit';
import { selectCarsData } from '../Cars/carsSlice';

const cartSlice = createSlice({
  name: 'cars',
  initialState: {
    cart: []
  },
  reducers: {
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

export const selectCartIds = state => state.cart.cart;

export const selectCart = createSelector(
  [selectCarsData, selectCartIds],
  (cars, ids) => cars.filter(car => ids.includes(car.id))
);

export const selectIsInCart = id =>
  createSelector(selectCartIds, cart => cart.includes(id));

export const selectFullCartPrice = createSelector(selectCart, cart =>
  cart.reduce((acc, curr) => acc + Number(curr.kaina), 0)
);

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
