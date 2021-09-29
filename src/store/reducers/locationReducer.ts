import {LocationAction, LocationActionTypes, LocationState} from "../../types/location";

const initialState:LocationState = {
    index: 0,
    zoomDefault: 10,
    coordinates: [],
    point: ""
}

export const locationReducer = (state = initialState, action: LocationAction):LocationState => {
    switch (action.type) {
        case LocationActionTypes.Change_CenterCoordinates:
            return {
                index: state.index, zoomDefault: state.zoomDefault,
                coordinates: action.payload, point: state.point
            }
        case LocationActionTypes.Change_IndexCity:
            return {
                index: action.payload, zoomDefault: state.zoomDefault,
                coordinates: state.coordinates, point: state.point
            }
        case LocationActionTypes.Change_Point:
            return {
                index: state.index, zoomDefault: state.zoomDefault,
                coordinates: state.coordinates, point: action.payload
            }
        case LocationActionTypes.Change_Zoom:
            return {
                index: state.index, zoomDefault: action.payload,
                coordinates: state.coordinates, point: state.point
            }
        default:
            return state
    }
}
