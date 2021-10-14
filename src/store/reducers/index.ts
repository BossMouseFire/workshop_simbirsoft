import {combineReducers} from "redux";
import {checkReducer} from "./checkReducer";
import {locationReducer} from "./locationReducer";
import {citiesReducer} from "./citiesReducer";
import {pointsReducer} from "./pointsReducer";
import {categoriesReducer} from "./categoriesReducer";
import {carsReducer} from "./carsReducer";
import {modelReducer} from "./modelReducer";
import {additionalReducer} from "./additionalReducer";

export const rootReducer = combineReducers({
    check: checkReducer,
    location: locationReducer,
    cities: citiesReducer,
    points: pointsReducer,
    categories: categoriesReducer,
    cars: carsReducer,
    model: modelReducer,
    additional: additionalReducer
})

export type RootState = ReturnType<typeof rootReducer>