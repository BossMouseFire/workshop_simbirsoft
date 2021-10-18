export interface ModelState {
  idCar: string;
  idCategory: string;
}

export enum ModelActionTypes {
  CHANGE_ID_CAR = "CHANGE_ID_CAR",
  CHANGE_ID_CATEGORY = "CHANGE_ID_CATEGORY",
}

interface ChangeIdCar {
  type: ModelActionTypes.CHANGE_ID_CAR;
  payload: string;
}

interface ChangeIdCategory {
  type: ModelActionTypes.CHANGE_ID_CATEGORY;
  payload: string;
}

export type ModelAction = ChangeIdCar | ChangeIdCategory;
