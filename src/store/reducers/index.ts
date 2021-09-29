import {combineReducers} from "redux";
import {checkReducer} from "./checkReducer";
import {locationReducer} from "./locationReducer";


export const rootReducer = combineReducers({
    check: checkReducer,
    location: locationReducer
})

export type RootState = ReturnType<typeof rootReducer>