import React, {ChangeEvent, useEffect, useState} from 'react'
import styles from './location.module.scss'
import {IPoint, LocationData} from "./locationData";
import {YMaps, Map, Placemark} from "react-yandex-maps";
import {useDispatch} from "react-redux";
import {changePickUpPoint, changeStateButton} from "../../../store/actionCreators/check";
import {useTypeSelector} from "../../../hooks/useTypeSelector";
import {changeCoordinates, changeIndexCity, changePoint, changeZoom} from "../../../store/actionCreators/location";

const Location:React.FC = () => {
    const {index, point, coordinates, zoomDefault} = useTypeSelector(state => state.location)
    const [indexCity, setIndexCity] = useState<number>(index)
    const [centerCoordinates, setCenterCoordinates] = useState<number[]>(coordinates)
    const [zoom, setZoom] = useState<number>(zoomDefault)
    const [valueInput, setValueInput] = useState<string>(point)
    const dispatch = useDispatch();
    useEffect(() => {
        setCenterCoordinates(LocationData[indexCity].coordinates)
        setZoom(10)
        dispatch(changeZoom(10))
        dispatch(changeCoordinates(LocationData[indexCity].coordinates))
    }, [indexCity])

    const onChangeIndexCity = (e: ChangeEvent<HTMLSelectElement>) => {
        const index = Number(e.target.value)
        setIndexCity(index);
        dispatch(changeIndexCity(index))
        setValueInput("")
    }
    const onChangePoint = (e: ChangeEvent<HTMLInputElement>) => {
        setValueInput(e.target.value)
        LocationData[indexCity].points.map(point => {
            if(point.address === e.target.value){
                setCenterCoordinates(point.coordinates)
                setZoom(16)
                dispatch(changePickUpPoint(e.target.value))
                dispatch(changeStateButton(true))
                dispatch(changeZoom(16))
                dispatch(changeCoordinates(point.coordinates))
                dispatch(changePoint(e.target.value))
            }
        })
    }
    const onClickPoint = (point: IPoint) => {
        setCenterCoordinates(point.coordinates)
        setValueInput(point.address)
        setZoom(16)

        dispatch(changeZoom(16))
        dispatch(changeCoordinates(point.coordinates))
        dispatch(changePoint(point.address))
        dispatch(changePickUpPoint(point.address))
    }
    return(
        <div className={styles.location}>
            <div className={styles.enterDataBlock}>
                <div>
                    <span>Город</span>
                    <select onChange={(e) => onChangeIndexCity(e)}>
                        {LocationData.map((location, index) =>
                            <option key={index} value={index}>{location.city}</option>
                        )}
                    </select>
                </div>
                <div>
                    <span>Пункт выдачи</span>
                    <input list="brow" placeholder={"Начните вводить пункт ..."} value={valueInput} onChange={(e) => onChangePoint(e)}/>
                    <datalist id="brow">
                        {LocationData[indexCity].points.map(point =>
                            <option value={point.address}/>
                        )}
                    </datalist>
                </div>
            </div>
            <div className={styles.mapBlock}>
                <span>Выбрать на карте:</span>
                <YMaps>
                    <Map state={{ center: centerCoordinates, zoom }}>
                        {LocationData[indexCity].points.map((point, index) =>
                            <Placemark
                                key={index}
                                geometry={
                                    point.coordinates
                                }
                                properties={
                                    {
                                        balloonContent: `<strong>Информация о пункте выдачи</strong> <hr/> Адрес: ${point.address}`
                                    }
                                }
                                modules={
                                    ['geoObject.addon.balloon', 'geoObject.addon.hint']
                                }
                                onClick={() => onClickPoint(point)}
                            />
                        )}
                    </Map>
                </YMaps>
            </div>
        </div>
    )
}

export default Location