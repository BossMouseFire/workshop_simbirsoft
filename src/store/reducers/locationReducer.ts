import {LocationAction, LocationActionTypes, LocationState} from "../../types/location";

const initialState:LocationState = {
    idCity: "",
    zoomDefault: 10,
    coordinates: [],
    point: ""
}

export const locationReducer = (state = initialState, action: LocationAction):LocationState => {
    switch (action.type) {
        case LocationActionTypes.Change_CenterCoordinates:
            return {
                idCity: state.idCity, zoomDefault: state.zoomDefault,
                coordinates: action.payload, point: state.point
            }
        case LocationActionTypes.Change_IdCity:
            return {
                idCity: action.payload, zoomDefault: state.zoomDefault,
                coordinates: state.coordinates, point: state.point
            }
        case LocationActionTypes.Change_Point:
            return {
                idCity: state.idCity, zoomDefault: state.zoomDefault,
                coordinates: state.coordinates, point: action.payload
            }
        case LocationActionTypes.Change_Zoom:
            return {
                idCity: state.idCity, zoomDefault: action.payload,
                coordinates: state.coordinates, point: state.point
            }
        default:
            return state
    }
}
