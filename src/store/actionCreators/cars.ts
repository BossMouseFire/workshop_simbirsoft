import { Dispatch } from "redux";
import { getCars, getCarsToCategory } from "../../api/api";
import { CarsAction, CarsActionTypes } from "../../types/cars";

export const fetchCars = () => {
  return async (dispatch: Dispatch<CarsAction>) => {
    try {
      dispatch({ type: CarsActionTypes.FETCH_CARS });
      const response = await getCars();
      dispatch({
        type: CarsActionTypes.FETCH_CARS_SUCCESS,
        payload: response.data.data,
      });
    } catch (error) {
      dispatch({ type: CarsActionTypes.FETCH_CARS_ERROR, payload: error });
    }
  };
};

export const fetchCarsToCategory = (id: string) => {
  return async (dispatch: Dispatch<CarsAction>) => {
    try {
      dispatch({ type: CarsActionTypes.FETCH_CARS });
      const response = await getCarsToCategory(id);
      dispatch({
        type: CarsActionTypes.FETCH_CARS_SUCCESS,
        payload: response.data.data,
      });
    } catch (error) {
      dispatch({ type: CarsActionTypes.FETCH_CARS_ERROR, payload: error });
    }
  };
};
