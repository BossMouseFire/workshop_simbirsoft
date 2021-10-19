export interface LocationState {
  idCity: string;
  coordinates: number[];
  zoomDefault: number;
  point: string;
}

export enum LocationActionTypes {
  Change_IdCity = "Change_IdCity",
  Change_CenterCoordinates = "Change_CenterCoordinates",
  Change_Zoom = "Change_Zoom",
  Change_Point = "Change_Point",
}

interface ChangeIdCity {
  type: LocationActionTypes.Change_IdCity;
  payload: string;
}
interface ChangeCenterCoordinates {
  type: LocationActionTypes.Change_CenterCoordinates;
  payload: number[];
}
interface ChangeZoom {
  type: LocationActionTypes.Change_Zoom;
  payload: number;
}
interface ChangePoint {
  type: LocationActionTypes.Change_Point;
  payload: string;
}

export type LocationAction =
  | ChangeCenterCoordinates
  | ChangeIdCity
  | ChangePoint
  | ChangeZoom;
