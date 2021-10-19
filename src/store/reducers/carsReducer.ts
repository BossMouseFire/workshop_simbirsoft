import { CarsAction, CarsActionTypes, CarsState } from "../../types/cars";

const initialState: CarsState = {
  cars: [],
  loading: false,
  error: null,
};

export const carsReducer = (
  state = initialState,
  action: CarsAction
): CarsState => {
  switch (action.type) {
    case CarsActionTypes.FETCH_CARS:
      return { cars: [], loading: true, error: null };
    case CarsActionTypes.FETCH_CARS_SUCCESS:
      return { cars: action.payload, loading: false, error: null };
    case CarsActionTypes.FETCH_CARS_ERROR:
      return { cars: [], loading: false, error: action.payload };
    default:
      return state;
  }
};
