import {Dispatch} from "redux";
import {CheckAction, CheckActionTypes} from "../../types/check";

export const changePickUpPoint = (point: string) => {
    return (dispatch: Dispatch<CheckAction>) => {
        dispatch({
            type: CheckActionTypes.Change_PickUpPoint,
            payload: point
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
