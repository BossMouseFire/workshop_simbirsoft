export interface AdditionalState {
    colorLocal: string,
    dateStartLocal: string,
    dateEndLocal: string,
    tariffLocal: string,
    fullTankState: boolean;
    babyChairState: boolean;
    rightHandDriveState: boolean;
}

export enum AdditionalActionTypes {
    CHANGE_COLOR_LOCAL = "CHANGE_COLOR_LOCAL",
    CHANGE_DATE_LOCAL = "CHANGE_DATE_END_LOCAL",
    CHANGE_TARIFF_LOCAL = "CHANGE_TARIFF_LOCAL",
    CHANGE_FULL_TANK_STATE = "CHANGE_FULL_TANK_STATE",
    CHANGE_BABY_CHAIR_STATE = "CHANGE_BABY_CHAIR_STATE",
    CHANGE_RIGHT_HAND_DRIVE_STATE = "CHANGE_RIGHT_HAND_DRIVE_STATE"
}

interface ChangeColorLocal {
    type: AdditionalActionTypes.CHANGE_COLOR_LOCAL,
    payload: string
}

interface ChangeDateLocal {
    type: AdditionalActionTypes.CHANGE_DATE_LOCAL,
    payload: {
        dateStart: string,
        dateEnd: string
    }
}

interface ChangeTariffLocal {
    type: AdditionalActionTypes.CHANGE_TARIFF_LOCAL,
    payload: string
}

interface ChangeFullTankState {
    type: AdditionalActionTypes.CHANGE_FULL_TANK_STATE,
    payload: boolean
}

interface ChangeBabyChairState {
    type: AdditionalActionTypes.CHANGE_BABY_CHAIR_STATE,
    payload: boolean
}

interface ChangeRightHandDriveState {
    type: AdditionalActionTypes.CHANGE_RIGHT_HAND_DRIVE_STATE,
    payload: boolean
}

export type AdditionalAction = ChangeColorLocal | ChangeDateLocal | ChangeTariffLocal |
    ChangeFullTankState | ChangeBabyChairState | ChangeRightHandDriveState