import api from '../../utils/api';
import { addCar, setDataLoaded } from './carsSlice';

export const getCar = async dispatch => {
  dispatch(setDataLoaded(false));

  const response = await api.getCar();
  const data = await response.json();

  dispatch(addCar(data));
  dispatch(setDataLoaded(true));
};
