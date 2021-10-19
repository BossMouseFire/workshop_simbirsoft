import { ICategory } from "./categories";

export interface ICar {
  id: string;
  name: string;
  description: string;
  number: string;
  categoryId: ICategory;
  thumbnail: {
    path: string;
  };
  tank: number;
  colors: string[];
  priceMin: number;
  priceMax: number;
}

export interface ICarCard {
  car: ICar;
}

export interface CarsState {
  cars: ICar[];
  loading: boolean;
  error: string | null;
}

export enum CarsActionTypes {
  FETCH_CARS = "FETCH_CARS",
  FETCH_CARS_SUCCESS = "FETCH_CARS_SUCCESS",
  FETCH_CARS_ERROR = "FETCH_CARS_ERROR",
}

interface FetchCarsAction {
  type: CarsActionTypes.FETCH_CARS;
}

interface FetchCarsActionSuccess {
  type: CarsActionTypes.FETCH_CARS_SUCCESS;
  payload: ICar[];
}

interface FetchCarsActionError {
  type: CarsActionTypes.FETCH_CARS_ERROR;
  payload: any;
}

export type CarsAction =
  | FetchCarsAction
  | FetchCarsActionSuccess
  | FetchCarsActionError;
