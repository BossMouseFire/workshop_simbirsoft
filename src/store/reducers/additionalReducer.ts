import {AdditionalAction, AdditionalActionTypes, AdditionalState} from "../../types/additional";


const initialState: AdditionalState = {
    colorLocal: "",
    dateStartLocal: "",
    dateEndLocal: "",
    tariffLocal: "",
    fullTankState: false,
    babyChairState: false,
    rightHandDriveState: false
}

export const additionalReducer = (state =  initialState, action:AdditionalAction):AdditionalState => {
    switch (action.type){
        case AdditionalActionTypes.CHANGE_COLOR_LOCAL:
            return {colorLocal: action.payload, dateStartLocal: state.dateStartLocal,
                dateEndLocal: state.dateEndLocal, tariffLocal: state.tariffLocal,
                rightHandDriveState: state.rightHandDriveState, babyChairState: state.babyChairState,
            fullTankState: state.fullTankState}
        case AdditionalActionTypes.CHANGE_DATE_LOCAL:
            return {colorLocal: state.colorLocal, dateStartLocal: action.payload.dateStart,
                dateEndLocal: action.payload.dateEnd, tariffLocal: state.tariffLocal,
                rightHandDriveState: state.rightHandDriveState, babyChairState: state.babyChairState,
                fullTankState: state.fullTankState}
        case AdditionalActionTypes.CHANGE_TARIFF_LOCAL:
            return {colorLocal: state.colorLocal, dateStartLocal: state.dateStartLocal,
                dateEndLocal: state.dateEndLocal, tariffLocal: action.payload,
                rightHandDriveState: state.rightHandDriveState, babyChairState: state.babyChairState,
                fullTankState: state.fullTankState}
        case AdditionalActionTypes.CHANGE_FULL_TANK_STATE:
            return {colorLocal: state.colorLocal, dateStartLocal: state.dateStartLocal,
                dateEndLocal: state.dateEndLocal, tariffLocal: state.tariffLocal,
                rightHandDriveState: state.rightHandDriveState, babyChairState: state.babyChairState,
                fullTankState: action.payload}
        case AdditionalActionTypes.CHANGE_BABY_CHAIR_STATE:
            return {colorLocal: state.colorLocal, dateStartLocal: state.dateStartLocal,
                dateEndLocal: state.dateEndLocal, tariffLocal: state.tariffLocal,
                rightHandDriveState: state.rightHandDriveState, babyChairState: action.payload,
                fullTankState: state.fullTankState}
        case AdditionalActionTypes.CHANGE_RIGHT_HAND_DRIVE_STATE:
            return {colorLocal: state.colorLocal, dateStartLocal: state.dateStartLocal,
                dateEndLocal: state.dateEndLocal, tariffLocal: state.tariffLocal,
                rightHandDriveState: action.payload, babyChairState: state.babyChairState,
                fullTankState: state.fullTankState}
        default:
            return state
    }
}