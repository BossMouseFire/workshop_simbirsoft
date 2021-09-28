import React, {ChangeEvent, useEffect, useState} from 'react'
import styles from './location.module.scss'
import {IPoint, LocationData} from "./locationData";
import {YMaps, Map, Placemark} from "react-yandex-maps";

const Location:React.FC = () => {
    const [indexCity, setIndexCity] = useState<number>(0)
    const [centerCoordinates, setCenterCoordinates] = useState<number[]>([])
    const [zoom, setZoom] = useState<number>(10)
    const [valueInput, setValueInput] = useState<string>("")
    useEffect(() => {
        setCenterCoordinates(LocationData[indexCity].coordinates)
        setZoom(10)
    }, [indexCity])

    const onChangeIndexCity = (e: ChangeEvent<HTMLSelectElement>) => {
        const index = Number(e.target.value)
        setIndexCity(index);
        setValueInput("")
    }
    const onChangePoint = (e: ChangeEvent<HTMLInputElement>) => {
        setValueInput(e.target.value)
        LocationData[indexCity].points.map(point => {
            if(point.address === e.target.value){
                setCenterCoordinates(point.coordinates)
                setZoom(16)
            }
        })
    }
    const onClickPoint = (point: IPoint) => {
        setCenterCoordinates(point.coordinates)
        setValueInput(point.address)
        setZoom(16)
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