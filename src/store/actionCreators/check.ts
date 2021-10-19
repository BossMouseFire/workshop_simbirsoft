import { Dispatch } from "redux";
import { CheckAction, CheckActionTypes } from "../../types/check";
import { ICar } from "../../types/cars";
import { IRate, IResponseOrder } from "../../types/api";
import { ICity } from "../../types/cities";
import { IPoint } from "../../types/points";

export const changePickUpPoint = (city: ICity, point: IPoint) => {
  return (dispatch: Dispatch<CheckAction>) => {
    dispatch({
      type: CheckActionTypes.Change_PickUpPoint,
      payload: {
        city,
        point,
      },
    });
  };
};

export const changeModel = (model: ICar) => {
  return (dispatch: Dispatch<CheckAction>) => {
    dispatch({
      type: CheckActionTypes.Change_Model,
      payload: model,
    });
  };
};

export const changePrice = (priceMin: number, priceMax: number) => {
  return (dispatch: Dispatch<CheckAction>) => {
    dispatch({
      type: CheckActionTypes.Change_Price,
      payload: {
        priceMin,
        priceMax,
      },
    });
  };
};

export const changeColorSelected = (color: string) => {
  return (dispatch: Dispatch<CheckAction>) => {
    dispatch({
      type: CheckActionTypes.Change_Color,
      payload: color,
    });
  };
};

export const changeLease = (leaseToMinute: number) => {
  return (dispatch: Dispatch<CheckAction>) => {
    dispatch({
      type: CheckActionTypes.Change_Lease,
      payload: leaseToMinute,
    });
  };
};

export const changeTotalPrice = (priceTotal: number) => {
  return (dispatch: Dispatch<CheckAction>) => {
    dispatch({
      type: CheckActionTypes.Change_Total_Price,
      payload: priceTotal,
    });
  };
};

export const changeTariff = (tariff: IRate) => {
  return (dispatch: Dispatch<CheckAction>) => {
    dispatch({
      type: CheckActionTypes.Change_Tariff,
      payload: tariff,
    });
  };
};

export const changeFullTank = (state: boolean) => {
  return (dispatch: Dispatch<CheckAction>) => {
    dispatch({
      type: CheckActionTypes.Change_FullTank,
      payload: state,
    });
  };
};

export const changeBabyChair = (state: boolean) => {
  return (dispatch: Dispatch<CheckAction>) => {
    dispatch({
      type: CheckActionTypes.Change_BabyChair,
      payload: state,
    });
  };
};

export const changeRightHandDrive = (state: boolean) => {
  return (dispatch: Dispatch<CheckAction>) => {
    dispatch({
      type: CheckActionTypes.Change_RightHandDrive,
      payload: state,
    });
  };
};

export const changeDate = (dateStart: string, dateEnd: string) => {
  return (dispatch: Dispatch<CheckAction>) => {
    dispatch({
      type: CheckActionTypes.Change_Date,
      payload: {
        dateStart,
        dateEnd,
      },
    });
  };
};

export const changeAllState = (data: IResponseOrder["data"]) => {
  return (dispatch: Dispatch<CheckAction>) => {
    const point = {
      id: data.pointId.id,
      address: data.pointId.address,
      name: data.pointId.name,
      coordinates: [0, 0],
      cityId: data.cityId,
    } as IPoint;
    dispatch({
      type: CheckActionTypes.Change_All_State,
      payload: {
        city: data.cityId,
        pickUpPoint: point,
        model: data.carId,
        colorSelected: data.color,
        lease: Math.ceil((data.dateTo - data.dateFrom) / 60000),
        tariff: data.rateId,
        fullTank: data.isFullTank,
        babyChair: data.isNeedChildChair,
        rightHandDrive: data.isRightWheel,
        priceMin: 0,
        priceMax: 0,
        priceTotal: data.price,
        dateStart: new Date(data.dateTo).toISOString(),
        dateEnd: new Date(data.dateFrom).toISOString(),
        orderStatus: data.orderStatusId,
      },
    });
  };
};
