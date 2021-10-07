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

export const changeStateButton = (state: boolean) => {
    return (dispatch: Dispatch<CheckAction>) => {
        dispatch({
            type: CheckActionTypes.Change_StateButton,
            payload: state
        })
    }
}

export const changeCurrentBlock = (number: number) => {
    return (dispatch: Dispatch<CheckAction>) => {
        dispatch({
            type: CheckActionTypes.Change_CurrentBlock,
            payload: number
        })
    }
}

export const openBlockedBlock = (number: number) => {
    return (dispatch: Dispatch<CheckAction>) => {
        dispatch({
            type: CheckActionTypes.Open_BlockedBlock,
            payload: number
        })
    }
}
