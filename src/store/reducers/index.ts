import {combineReducers} from "redux";
import {checkReducer} from "./checkReducer";
import {locationReducer} from "./locationReducer";
import {citiesReducer} from "./citiesReducer";
import {pointsReducer} from "./pointsReducer";

export const rootReducer = combineReducers({
    check: checkReducer,
    location: locationReducer,
    cities: citiesReducer,
    points: pointsReducer
})

export type RootState = ReturnType<typeof rootReducer>