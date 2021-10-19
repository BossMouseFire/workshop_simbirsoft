import { Dispatch } from "redux";
import { LocationAction, LocationActionTypes } from "../../types/location";

export const changePoint = (point: string) => {
  return (dispatch: Dispatch<LocationAction>) => {
    dispatch({
      type: LocationActionTypes.Change_Point,
      payload: point,
    });
  };
};

export const changeZoom = (zoom: number) => {
  return (dispatch: Dispatch<LocationAction>) => {
    dispatch({
      type: LocationActionTypes.Change_Zoom,
      payload: zoom,
    });
  };
};

export const changeCoordinates = (coordinates: number[]) => {
  return (dispatch: Dispatch<LocationAction>) => {
    dispatch({
      type: LocationActionTypes.Change_CenterCoordinates,
      payload: coordinates,
    });
  };
};

export const changeIdCity = (id: string) => {
  return (dispatch: Dispatch<LocationAction>) => {
    dispatch({
      type: LocationActionTypes.Change_IdCity,
      payload: id,
    });
  };
};
