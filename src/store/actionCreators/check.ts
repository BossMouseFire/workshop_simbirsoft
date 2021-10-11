import {Dispatch} from "redux";
import {CheckAction, CheckActionTypes} from "../../types/check";

export const changePickUpPoint = (city: string, point: string) => {
    return (dispatch: Dispatch<CheckAction>) => {
        dispatch({
            type: CheckActionTypes.Change_PickUpPoint,
            payload: {
                city, point
            }
        })
    }
}

export const changeModel = (model: string) => {
    return (dispatch: Dispatch<CheckAction>) => {
        dispatch({
            type: CheckActionTypes.Change_Model,
            payload: model
        })
    }
}

export const changePrice = (priceMin:number, priceMax: number) => {
    return (dispatch: Dispatch<CheckAction>) => {
        dispatch({
            type: CheckActionTypes.Change_Price,
            payload: {
                priceMin, priceMax
            }
        })
    }
}