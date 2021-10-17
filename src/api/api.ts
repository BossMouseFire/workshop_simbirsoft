import axios from "axios";
import {
    IRequestCoordinates,
    IRequestCities,
    IRequestPoints,
    IRequestCategories,
    IRequestCars,
    IRequestOrderStatus, IRequestRates, IBodyOrder, IResponseOrder
} from "../types/api";
import {packageData} from "../utils/utils";

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

export const getOrderStatus = async () => {
    return await instanceApiFactory.get<IRequestOrderStatus>("/api/db/orderStatus/")
}

export const getRates = async () => {
    return await instanceApiFactory.get<IRequestRates>("/api/db/rate")
}

export const postOrder = async (body: IBodyOrder) => {
    const data = packageData(body)
    return await instanceApiFactory.post<IResponseOrder>("/api/db/order", data)
}

export const getOrderById = async (id: string) => {
    return await instanceApiFactory.get<IResponseOrder>(`/api/db/order/${id}`)
}

export const cancelOrder = async (id: string) => {
    const formData = new FormData()
    formData.append("orderStatusId", "5e26a1f5099b810b946c5d8c")
    return await instanceApiFactory.put<IResponseOrder>(`/api/db/order/${id}`, formData)
}