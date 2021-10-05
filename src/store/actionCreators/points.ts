import {Dispatch} from "redux";
import {PointsAction, PointsActionTypes} from "../../types/points";
import {getPointsForCity} from "../../api/api";

export const fetchPointsForCity = (id: string) => {
    return async (dispatch: Dispatch<PointsAction>) => {
        try {
            dispatch({type: PointsActionTypes.FETCH_POINTS})
            const response = await getPointsForCity(id)
            dispatch({
                type: PointsActionTypes.FETCH_POINTS_SUCCESS,
                payload: response.data.data
            })
        }
        catch (error) {
            dispatch({type: PointsActionTypes.FETCH_POINTS_ERROR, payload: error})
        }
    }
}
