import {Dispatch} from "redux";
import {CheckAction, CheckActionTypes} from "../../types/check";
import {ICar} from "../../types/cars";

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

export const changeModel = (model: ICar) => {
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

export const changeColorSelected = (color: string) => {
    return (dispatch: Dispatch<CheckAction>) => {
        dispatch({
            type: CheckActionTypes.Change_Color,
            payload: color
        })
    }
}

export const changeLease = (leaseToMinute: number) => {
    return (dispatch: Dispatch<CheckAction>) => {
        dispatch({
            type: CheckActionTypes.Change_Lease,
            payload: leaseToMinute
        })
    }
}

export const changeTotalPrice = (priceTotal: number) => {
    return (dispatch: Dispatch<CheckAction>) => {
        dispatch({
            type: CheckActionTypes.Change_Total_Price,
            payload: priceTotal
        })
    }
}

export const changeTariff = (tariff: string) => {
    return (dispatch: Dispatch<CheckAction>) => {
        dispatch({
            type: CheckActionTypes.Change_Tariff,
            payload: tariff
        })
    }
}

export const changeFullTank = (state: boolean) => {
    return (dispatch: Dispatch<CheckAction>) => {
        dispatch({
            type: CheckActionTypes.Change_FullTank,
            payload: state
        })
    }
}

export const changeBabyChair = (state: boolean) => {
    return (dispatch: Dispatch<CheckAction>) => {
        dispatch({
            type: CheckActionTypes.Change_BabyChair,
            payload: state
        })
    }
}

export const changeRightHandDrive = (state: boolean) => {
    return (dispatch: Dispatch<CheckAction>) => {
        dispatch({
            type: CheckActionTypes.Change_RightHandDrive,
            payload: state
        })
    }
}

export const changeDateStart = (date: string) => {
    return (dispatch: Dispatch<CheckAction>) => {
        dispatch({
            type: CheckActionTypes.Change_Date_Start,
            payload: date
        })
    }
}