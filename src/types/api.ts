import {ICity} from "./cities";
import {IPoint} from "./points";
import {ICar} from "./cars";
import {ICategory} from "./categories";

export interface IRequestCoordinates {
    response: {
        GeoObjectCollection: {
            featureMember: [
                {
                    GeoObject: {
                        Point: {
                            pos: string
                        }
                    }
                }
            ]
        }
    }
}

export interface IRequestCities{
    data: ICity[]
}

export interface IRequestPoints{
    data: IPoint[]
}

export interface IRequestCars {
    data: ICar[]
}

export interface IRequestCategories{
    data: ICategory[]
}