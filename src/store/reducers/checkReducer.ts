import {CheckAction, CheckActionTypes, CheckState} from "../../types/check";

const initialState:CheckState = {
    city: "",
    pickUpPoint: "",
    model: "",
    color: "",
    lease: "",
    tariff: "",
    fullTank: false,
    babyChair: false,
    rightHandDrive: false,
}

export const checkReducer = (state = initialState, action: CheckAction):CheckState => {
    switch (action.type){
        case CheckActionTypes.Change_PickUpPoint:
            return {
                city: action.payload.city, pickUpPoint: action.payload.point, model: state.model, color: state.color,
                lease: state.lease, tariff: state.tariff, fullTank: state.fullTank,
                babyChair: state.babyChair, rightHandDrive: state.rightHandDrive,
            }
        case CheckActionTypes.Change_Model:
            return {
                city: state.city, pickUpPoint: state.pickUpPoint, model: action.payload, color: state.color,
                lease: state.lease, tariff: state.tariff, fullTank: state.fullTank,
                babyChair: state.babyChair, rightHandDrive: state.rightHandDrive,
            }
        default:
            return state
    }
}