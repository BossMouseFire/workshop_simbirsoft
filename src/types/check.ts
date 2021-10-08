export interface CheckState {
    city: string;
    pickUpPoint: string;
    model: string;
    color: string;
    lease: string;
    tariff: string;
    fullTank: boolean;
    babyChair: boolean;
    rightHandDrive: boolean;
    priceMin: number,
    priceMax: number
}

export enum CheckActionTypes {
    Change_PickUpPoint = "Change_PickUpPoint",
    Change_Model = "Change_Model",
    Change_Color = "Change_Color",
    Change_Lease = "Change_Lease",
    Change_Tariff = "Change_Tariff",
    Change_FullTank = "Change_FullTank",
    Change_BabyChair = "Change_BabyChair",
    Change_RightHandDrive = "Change_RightHandDrive",
    Change_Price = "Change_Price"
}

interface ChangePickUpPointAction {
    type: CheckActionTypes.Change_PickUpPoint,
    payload: {
        city: string,
        point: string
    }
}
interface ChangeModelAction {
    type: CheckActionTypes.Change_Model,
    payload: string
}
interface ChangeColorAction {
    type: CheckActionTypes.Change_Color,
    payload: string
}
interface ChangeLeaseAction {
    type: CheckActionTypes.Change_Lease,
    payload: string
}
interface ChangeTariffAction {
    type: CheckActionTypes.Change_Tariff,
    payload: string
}
interface ChangeFullTankAction {
    type: CheckActionTypes.Change_FullTank,
    payload: boolean
}
interface ChangeBabyChairAction {
    type: CheckActionTypes.Change_BabyChair,
    payload:boolean
}
interface ChangeRightHandDriveAction {
    type: CheckActionTypes.Change_RightHandDrive,
    payload: boolean
}
interface ChangePriceAction {
    type: CheckActionTypes.Change_Price,
    payload: {
        priceMin: number,
        priceMax: number
    }
}
export type CheckAction = ChangeBabyChairAction | ChangeColorAction |
    ChangeFullTankAction | ChangeRightHandDriveAction | ChangePickUpPointAction | ChangeModelAction |
    ChangeTariffAction | ChangeLeaseAction | ChangePriceAction