import { Dispatch } from "redux";
import {
  AdditionalAction,
  AdditionalActionTypes,
} from "../../types/additional";
import { IRate } from "../../types/api";

export const changeColorLocal = (color: string) => {
  return (dispatch: Dispatch<AdditionalAction>) => {
    dispatch({
      type: AdditionalActionTypes.CHANGE_COLOR_LOCAL,
      payload: color,
    });
  };
};

export const changeDateLocal = (dateStart: string, dateEnd: string) => {
  return (dispatch: Dispatch<AdditionalAction>) => {
    dispatch({
      type: AdditionalActionTypes.CHANGE_DATE_LOCAL,
      payload: {
        dateStart,
        dateEnd,
      },
    });
  };
};

export const changeTariffLocal = (tariff: IRate) => {
  return (dispatch: Dispatch<AdditionalAction>) => {
    dispatch({
      type: AdditionalActionTypes.CHANGE_TARIFF,
      payload: tariff,
    });
  };
};

export const changeFullTankLocal = (state: boolean) => {
  return (dispatch: Dispatch<AdditionalAction>) => {
    dispatch({
      type: AdditionalActionTypes.CHANGE_FULL_TANK_STATE,
      payload: state,
    });
  };
};

export const changeBabyChairLocal = (state: boolean) => {
  return (dispatch: Dispatch<AdditionalAction>) => {
    dispatch({
      type: AdditionalActionTypes.CHANGE_BABY_CHAIR_STATE,
      payload: state,
    });
  };
};

export const changeRightHandDriveLocal = (state: boolean) => {
  return (dispatch: Dispatch<AdditionalAction>) => {
    dispatch({
      type: AdditionalActionTypes.CHANGE_RIGHT_HAND_DRIVE_STATE,
      payload: state,
    });
  };
};
