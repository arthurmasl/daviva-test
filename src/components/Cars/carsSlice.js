import { createSlice } from '@reduxjs/toolkit';

const carsSlice = createSlice({
  name: 'weather',
  initialState: {
    cars: [],
    isLoaded: false
  },
  reducers: {
    addCar(state, action) {
      state.cars.push(action.payload);
    },

    setDataLoaded(state, action) {
      state.isLoaded = action.payload;
    }
  }
});

export const selectCarsData = state => state.cars.cars;
export const selectIsLoaded = state => state.cars.isLoaded;

export const { addCar, setDataLoaded } = carsSlice.actions;
export default carsSlice.reducer;
