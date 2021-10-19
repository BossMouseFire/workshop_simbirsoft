import {
  AdditionalAction,
  AdditionalActionTypes,
  AdditionalState,
} from "../../types/additional";
import { IRate } from "../../types/api";

const initialState: AdditionalState = {
  colorLocal: "",
  dateStartLocal: "",
  dateEndLocal: "",
  tariffLocal: <IRate>{},
  fullTankState: false,
  babyChairState: false,
  rightHandDriveState: false,
};

export const additionalReducer = (
  state = initialState,
  action: AdditionalAction
): AdditionalState => {
  switch (action.type) {
    case AdditionalActionTypes.CHANGE_COLOR_LOCAL:
      return { ...state, colorLocal: action.payload };
    case AdditionalActionTypes.CHANGE_DATE_LOCAL:
      return {
        ...state,
        dateStartLocal: action.payload.dateStart,
        dateEndLocal: action.payload.dateEnd,
      };
    case AdditionalActionTypes.CHANGE_TARIFF:
      return { ...state, tariffLocal: action.payload };
    case AdditionalActionTypes.CHANGE_FULL_TANK_STATE:
      return { ...state, fullTankState: action.payload };
    case AdditionalActionTypes.CHANGE_BABY_CHAIR_STATE:
      return { ...state, babyChairState: action.payload };
    case AdditionalActionTypes.CHANGE_RIGHT_HAND_DRIVE_STATE:
      return { ...state, rightHandDriveState: action.payload };
    default:
      return state;
  }
};
