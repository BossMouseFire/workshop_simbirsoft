export interface IPoint{
    address: string,
    name: string,
    coordinates: number[]
    cityId: {
        name: string,
        id: string
    },
    id: string
}


export interface PointsState{
    points: IPoint[],
    loading: boolean,
    error: null | string
}

export enum PointsActionTypes {
    FETCH_POINTS = "FETCH_POINTS",
    FETCH_POINTS_SUCCESS = "FETCH_POINTS_SUCCESS",
    FETCH_POINTS_ERROR = "FETCH_POINTS_ERROR"
}
interface FetchCitiesAction {
    type: PointsActionTypes.FETCH_POINTS
}

interface FetchCitiesActionSuccess {
    type: PointsActionTypes.FETCH_POINTS_SUCCESS;
    payload: IPoint[]
}

interface FetchCitiesActionError {
    type: PointsActionTypes.FETCH_POINTS_ERROR;
    payload: any
}

export type PointsAction = FetchCitiesAction | FetchCitiesActionSuccess | FetchCitiesActionError