import {CheckAction, CheckActionTypes, CheckState} from "../../types/check";

const initialState:CheckState = {
    pickUpPoint: "",
    model: "",
    color: "",
    lease: "",
    tariff: "",
    fullTank: false,
    babyChair: false,
    rightHandDrive: false,
    currentBlock: 0,
    activeButton: false
}

export const checkReducer = (state = initialState, action: CheckAction):CheckState => {
    switch (action.type){
        case CheckActionTypes.Change_PickUpPoint:
            return {
                pickUpPoint: action.payload, model: state.model, color: state.color,
                lease: state.lease, tariff: state.tariff, fullTank: state.fullTank,
                babyChair: state.babyChair, rightHandDrive: state.rightHandDrive,
                currentBlock: state.currentBlock, activeButton: state.activeButton
            }
        case CheckActionTypes.Change_StateButton:
            return {
                pickUpPoint: state.pickUpPoint, model: state.model, color: state.color,
                lease: state.lease, tariff: state.tariff, fullTank: state.fullTank,
                babyChair: state.babyChair, rightHandDrive: state.rightHandDrive,
                currentBlock: state.currentBlock, activeButton: action.payload
            }
        case CheckActionTypes.Change_CurrentBlock:
            return {
                pickUpPoint: state.pickUpPoint, model: state.model, color: state.color,
                lease: state.lease, tariff: state.tariff, fullTank: state.fullTank,
                babyChair: state.babyChair, rightHandDrive: state.rightHandDrive,
                currentBlock: action.payload, activeButton: state.activeButton
            }
        default:
            return state
    }
}