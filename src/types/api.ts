import { ICity } from "./cities";
import { IPoint } from "./points";
import { ICar } from "./cars";
import { ICategory } from "./categories";

export interface IRequestCoordinates {
  response: {
    GeoObjectCollection: {
      featureMember: [
        {
          GeoObject: {
            Point: {
              pos: string;
            };
          };
        }
      ];
    };
  };
}

export interface IRequestCities {
  data: ICity[];
}

export interface IRequestPoints {
  data: IPoint[];
}

export interface IRequestCars {
  data: ICar[];
}

export interface IRequestCategories {
  data: ICategory[];
}

export interface IRequestOrderStatus {
  data: IStatus[];
}

export interface IStatus {
  id: string;
  name: string;
}

export interface IRequestRates {
  data: IRate[];
}

export interface IRate {
  id: string;
  price: number;
  rateTypeId: IRateType;
}

interface IRateType {
  id: string;
  unit: string;
  name: string;
}

export interface IResponseOrder {
  data: {
    orderStatusId: IStatus;
    cityId: ICity;
    pointId: {
      address: string;
      name: string;
      id: string;
    };
    carId: ICar;
    color: string;
    dateFrom: number;
    dateTo: number;
    rateId: IRate;
    price: number;
    isFullTank: boolean;
    isNeedChildChair: boolean;
    isRightWheel: boolean;
    id: string;
  };
}

export interface IBodyOrder {
  orderStatusId: string;
  cityId: string;
  pointId: string;
  carId: string;
  color: string;
  dateFrom: number;
  dateTo: number;
  rateId: string;
  price: number;
  isFullTank: boolean;
  isNeedChildChair: boolean;
  isRightWheel: boolean;
}
