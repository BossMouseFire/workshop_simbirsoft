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
            return {
                city: action.payload.city, pickUpPoint: action.payload.point, model: state.model, colorSelected: state.colorSelected,
                lease: state.lease, tariff: state.tariff, fullTank: state.fullTank,
                babyChair: state.babyChair, rightHandDrive: state.rightHandDrive,
                priceMin: state.priceMin, priceMax: state.priceMax, priceTotal: state.priceTotal,
                dateStart: state.dateStart
            }
        case CheckActionTypes.Change_Model:
            return {
                city: state.city, pickUpPoint: state.pickUpPoint, model: action.payload, colorSelected: state.colorSelected,
                lease: state.lease, tariff: state.tariff, fullTank: state.fullTank,
                babyChair: state.babyChair, rightHandDrive: state.rightHandDrive,
                priceMin: state.priceMin, priceMax: state.priceMax, priceTotal: state.priceTotal,
                dateStart: state.dateStart
            }
        case CheckActionTypes.Change_Price:
            return {
                city: state.city, pickUpPoint: state.pickUpPoint, model: state.model, colorSelected: state.colorSelected,
                lease: state.lease, tariff: state.tariff, fullTank: state.fullTank,
                babyChair: state.babyChair, rightHandDrive: state.rightHandDrive,
                priceMin: action.payload.priceMin, priceMax: action.payload.priceMax,
                priceTotal: state.priceTotal - state.priceMin + action.payload.priceMin,
                dateStart: state.dateStart
            }
        case CheckActionTypes.Change_Color:
            return {
                city: state.city, pickUpPoint: state.pickUpPoint, model: state.model, colorSelected: action.payload,
                lease: state.lease, tariff: state.tariff, fullTank: state.fullTank,
                babyChair: state.babyChair, rightHandDrive: state.rightHandDrive,
                priceMin: state.priceMin, priceMax: state.priceMax, priceTotal: state.priceTotal,
                dateStart: state.dateStart
            }
        case CheckActionTypes.Change_Lease:
            return {
                city: state.city, pickUpPoint: state.pickUpPoint, model: state.model, colorSelected: state.colorSelected,
                lease: action.payload, tariff: state.tariff, fullTank: state.fullTank,
                babyChair: state.babyChair, rightHandDrive: state.rightHandDrive,
                priceMin: state.priceMin, priceMax: state.priceMax, priceTotal: state.priceTotal,
                dateStart: state.dateStart
            }
        case CheckActionTypes.Change_Total_Price:
            return {
                city: state.city, pickUpPoint: state.pickUpPoint, model: state.model, colorSelected: state.colorSelected,
                lease: state.lease, tariff: state.tariff, fullTank: state.fullTank,
                babyChair: state.babyChair, rightHandDrive: state.rightHandDrive,
                priceMin: state.priceMin, priceMax: state.priceMax, priceTotal: action.payload,
                dateStart: state.dateStart
            }
        case CheckActionTypes.Change_Tariff:
            return {
                city: state.city, pickUpPoint: state.pickUpPoint, model: state.model, colorSelected: state.colorSelected,
                lease: state.lease, tariff: action.payload, fullTank: state.fullTank,
                babyChair: state.babyChair, rightHandDrive: state.rightHandDrive,
                priceMin: state.priceMin, priceMax: state.priceMax, priceTotal: state.priceTotal,
                dateStart: state.dateStart
            }
        case CheckActionTypes.Change_FullTank:
            return {
                city: state.city, pickUpPoint: state.pickUpPoint, model: state.model, colorSelected: state.colorSelected,
                lease: state.lease, tariff: state.tariff, fullTank: action.payload,
                babyChair: state.babyChair, rightHandDrive: state.rightHandDrive,
                priceMin: state.priceMin, priceMax: state.priceMax, priceTotal: state.priceTotal,
                dateStart: state.dateStart
            }
        case CheckActionTypes.Change_BabyChair:
            return {
                city: state.city, pickUpPoint: state.pickUpPoint, model: state.model, colorSelected: state.colorSelected,
                lease: state.lease, tariff: state.tariff, fullTank: state.fullTank,
                babyChair: action.payload, rightHandDrive: state.rightHandDrive,
                priceMin: state.priceMin, priceMax: state.priceMax, priceTotal: state.priceTotal,
                dateStart: state.dateStart
            }
        case CheckActionTypes.Change_RightHandDrive:
            return {
                city: state.city, pickUpPoint: state.pickUpPoint, model: state.model, colorSelected: state.colorSelected,
                lease: state.lease, tariff: state.tariff, fullTank: state.fullTank,
                babyChair: state.babyChair, rightHandDrive: action.payload,
                priceMin: state.priceMin, priceMax: state.priceMax, priceTotal: state.priceTotal,
                dateStart: state.dateStart
            }
        default:
            return state
    }
}