import {ICity} from "./cities";
import {IPoint} from "./points";

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