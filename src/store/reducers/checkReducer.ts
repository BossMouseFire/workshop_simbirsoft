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
    currentBlock: 0,
    blockedBlock: 0,
    activeButton: false
}

export const checkReducer = (state = initialState, action: CheckAction):CheckState => {
    switch (action.type){
        case CheckActionTypes.Change_PickUpPoint:
            return {
                city: action.payload.city, pickUpPoint: action.payload.point, model: state.model, color: state.color,
                lease: state.lease, tariff: state.tariff, fullTank: state.fullTank,
                babyChair: state.babyChair, rightHandDrive: state.rightHandDrive,
                currentBlock: state.currentBlock, activeButton: state.activeButton,
                blockedBlock: state.blockedBlock,
            }
        case CheckActionTypes.Change_StateButton:
            return {
                city: state.city,
                pickUpPoint: state.pickUpPoint, model: state.model, color: state.color,
                lease: state.lease, tariff: state.tariff, fullTank: state.fullTank,
                babyChair: state.babyChair, rightHandDrive: state.rightHandDrive,
                currentBlock: state.currentBlock, activeButton: action.payload,
                blockedBlock: state.blockedBlock
            }
        case CheckActionTypes.Change_CurrentBlock:
            return {
                city: state.city,
                pickUpPoint: state.pickUpPoint, model: state.model, color: state.color,
                lease: state.lease, tariff: state.tariff, fullTank: state.fullTank,
                babyChair: state.babyChair, rightHandDrive: state.rightHandDrive,
                currentBlock: action.payload, activeButton: state.activeButton,
                blockedBlock: state.blockedBlock,
            }
        case CheckActionTypes.Open_BlockedBlock:
            return {
                city: state.city,
                pickUpPoint: state.pickUpPoint, model: state.model, color: state.color,
                lease: state.lease, tariff: state.tariff, fullTank: state.fullTank,
                babyChair: state.babyChair, rightHandDrive: state.rightHandDrive,
                currentBlock: state.currentBlock, activeButton: state.activeButton,
                blockedBlock: action.payload,
            }
        default:
            return state
    }
}