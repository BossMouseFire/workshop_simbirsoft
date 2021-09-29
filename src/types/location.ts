
export interface LocationState {
    index: number,
    coordinates: number[],
    zoomDefault: number,
    point: string
}

export enum LocationActionTypes {
    Change_IndexCity = "Change_IndexCity",
    Change_CenterCoordinates = "Change_CenterCoordinates",
    Change_Zoom = "Change_Zoom",
    Change_Point = "Change_Point",
}

interface ChangeChangeIndexCity {
    type: LocationActionTypes.Change_IndexCity,
    payload: number
}
interface ChangeCenterCoordinates {
    type: LocationActionTypes.Change_CenterCoordinates,
    payload: number[]
}
interface ChangeZoom {
    type: LocationActionTypes.Change_Zoom,
    payload: number
}
interface ChangePoint {
    type: LocationActionTypes.Change_Point,
    payload: string
}

export type LocationAction = ChangeCenterCoordinates | ChangeChangeIndexCity |
    ChangePoint | ChangeZoom