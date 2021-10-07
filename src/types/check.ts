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
    currentBlock: number;
    activeButton: boolean,
    blockedBlock: number
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
    Change_CurrentBlock = "Change_CurrentBlock",
    Change_StateButton = "Change_StateButton",
    Open_BlockedBlock = "Open_BlockedBlock"
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
interface ChangeCurrentBlockAction {
    type: CheckActionTypes.Change_CurrentBlock,
    payload: number
}
interface ChangeStateButton {
    type: CheckActionTypes.Change_StateButton,
    payload: boolean
}
interface OpenBlockedBlock {
    type: CheckActionTypes.Open_BlockedBlock,
    payload: number
}

export type CheckAction = ChangeBabyChairAction | ChangeColorAction | ChangeCurrentBlockAction |
    ChangeFullTankAction | ChangeRightHandDriveAction | ChangePickUpPointAction | ChangeModelAction |
    ChangeTariffAction | ChangeLeaseAction | ChangeStateButton | OpenBlockedBlock