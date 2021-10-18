import {
  LocationAction,
  LocationActionTypes,
  LocationState,
} from "../../types/location";

const initialState: LocationState = {
  idCity: "",
  zoomDefault: 10,
  coordinates: [],
  point: "",
};

export const locationReducer = (
  state = initialState,
  action: LocationAction
): LocationState => {
  switch (action.type) {
    case LocationActionTypes.Change_CenterCoordinates:
      return { ...state, coordinates: action.payload };
    case LocationActionTypes.Change_IdCity:
      return { ...state, idCity: action.payload };
    case LocationActionTypes.Change_Point:
      return { ...state, point: action.payload };
    case LocationActionTypes.Change_Zoom:
      return { ...state, zoomDefault: action.payload };
    default:
      return state;
  }
};
