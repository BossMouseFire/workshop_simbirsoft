import { ModelAction, ModelActionTypes, ModelState } from "../../types/model";

const initialState: ModelState = {
  idCar: "",
  idCategory: "",
};

export const modelReducer = (
  state = initialState,
  action: ModelAction
): ModelState => {
  switch (action.type) {
    case ModelActionTypes.CHANGE_ID_CAR:
      return { idCar: action.payload, idCategory: state.idCategory };
    case ModelActionTypes.CHANGE_ID_CATEGORY:
      return { idCar: state.idCar, idCategory: action.payload };
    default:
      return state;
  }
};
