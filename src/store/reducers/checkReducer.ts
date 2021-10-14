import {CheckAction, CheckActionTypes, CheckState} from "../../types/check";
import {ICar} from "../../types/cars";

const initialState:CheckState = {
    city: "",
    pickUpPoint: "",
    model: <ICar>{},
    colorSelected: "",
    lease: 0,
    tariff: "",
    fullTank: false,
    babyChair: false,
    rightHandDrive: false,
    priceMin: 1000,
    priceMax: 300000,
    priceTotal: 1000,
    dateStart: ""
}

export const checkReducer = (state = initialState, action: CheckAction):CheckState => {
    switch (action.type){
        case CheckActionTypes.Change_PickUpPoint:
            return {...state, city: action.payload.city, pickUpPoint: action.payload.point}
        case CheckActionTypes.Change_Model:
            return {...state, model: action.payload}
        case CheckActionTypes.Change_Price:
            return {...state, priceMin: action.payload.priceMin, priceMax: action.payload.priceMax,
                priceTotal: state.priceTotal - state.priceMin + action.payload.priceMin}
        case CheckActionTypes.Change_Color:
            return {...state, colorSelected: action.payload}
        case CheckActionTypes.Change_Lease:
            return {...state, lease: action.payload}
        case CheckActionTypes.Change_Total_Price:
            return {...state, priceTotal: action.payload}
        case CheckActionTypes.Change_Tariff:
            return {...state, tariff: action.payload}
        case CheckActionTypes.Change_FullTank:
            return {...state, fullTank: action.payload}
        case CheckActionTypes.Change_BabyChair:
            return {...state, babyChair: action.payload}
        case CheckActionTypes.Change_RightHandDrive:
            return {...state, rightHandDrive: action.payload}
        case CheckActionTypes.Change_Date_Start:
            return {...state, dateStart: action.payload}
        default:
            return state
    }
}