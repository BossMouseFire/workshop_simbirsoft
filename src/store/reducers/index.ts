import {combineReducers} from "redux";
import {checkReducer} from "./checkReducer";


export const rootReducer = combineReducers({
    check: checkReducer
})

export type RootState = ReturnType<typeof rootReducer>