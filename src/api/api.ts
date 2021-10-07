import axios from "axios";
import {IRequestCoordinates, IRequestCities, IRequestPoints, IRequestCategories, IRequestCars} from "../types/api";

const instanceApiFactory = axios.create({
    baseURL: "https://api-factory.simbirsoft1.com",
    headers: {
        "X-Api-Factory-Application-Id": "5e25c641099b810b946c5d5b",
        "Access-Control-Allow-Origin": "*"
    }
})

export const getCoordinates = async (address: string) => {
    const data = {
        params: {
            apikey: "44bdb50d-a402-4e9b-9369-e8cf2154dd8f",
            geocode: address,
            format: "json"
        }
    }
    const response = await axios.get<IRequestCoordinates>('https://geocode-maps.yandex.ru/1.x/', data)
    const array = response.data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(" ").reverse()
    return <number[]>array.map(item => Number(item))
}

export const getCities = async () => {
    return await instanceApiFactory.get<IRequestCities>("/api/db/city")
}

export const getPointsToCity = async (id: string) => {
    return await instanceApiFactory.get<IRequestPoints>(
        "/api/db/point", {
            params: {
                "cityId": id
            }
        })
}

export const getCategories = async () => {
    return await  instanceApiFactory.get<IRequestCategories>("/api/db/category")
}

export const getCars = async () => {
    return await instanceApiFactory.get<IRequestCars>("/api/db/car")
}

export const getCarsToCategory = async (id: string) => {
    return await instanceApiFactory.get<IRequestCars>(
        "/api/db/car", {
            params: {
                categoryId: id
            }
        })
}