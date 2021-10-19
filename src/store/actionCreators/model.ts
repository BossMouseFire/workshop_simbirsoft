import { Dispatch } from "redux";
import { ModelAction, ModelActionTypes } from "../../types/model";

export const changeIdCar = (id: string) => {
  return (dispatch: Dispatch<ModelAction>) => {
    dispatch({
      type: ModelActionTypes.CHANGE_ID_CAR,
      payload: id,
    });
  };
};

export const changeIdCategory = (id: string) => {
  return (dispatch: Dispatch<ModelAction>) => {
    dispatch({
      type: ModelActionTypes.CHANGE_ID_CATEGORY,
      payload: id,
    });
  };
};
