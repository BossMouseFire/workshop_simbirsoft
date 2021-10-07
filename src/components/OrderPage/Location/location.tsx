import React, {ChangeEvent, useEffect, useState} from 'react'
import styles from './location.module.scss'
import {Map, Placemark, YMaps} from "react-yandex-maps";
import {useDispatch} from "react-redux";
import {changePickUpPoint, changeStateButton} from "../../../store/actionCreators/check";
import {useTypeSelector} from "../../../hooks/useTypeSelector";
import {changeCoordinates, changeIdCity, changePoint, changeZoom} from "../../../store/actionCreators/location";
import {fetchCities} from "../../../store/actionCreators/cities";
import {fetchPointsForCity} from "../../../store/actionCreators/points";
import {getCoordinates} from "../../../api/api";
import {IPoint} from "../../../types/points";

const Location:React.FC = () => {
    const {idCity, point, coordinates, zoomDefault} = useTypeSelector(state => state.location)
    const {cities} = useTypeSelector(state => state.cities)
    const {points} = useTypeSelector(state => state.points)
    const [valueInput, setValueInput] = useState<string>(point)
    const [pointsWithCoordinates, setPointsWithCoordinates] = useState<IPoint[]>([])
    const [idCityLocal, setIdCityLocal] = useState<string>(idCity)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCities())
        dispatch(changeZoom(10))
    }, [])

    useEffect(() => {
        if(cities.length > 0){
            dispatch(fetchPointsForCity(idCity ? idCity : cities[0].id ))
        }
    }, [cities])

    useEffect(() => {
        getPointsCoordinates()
    }, [points])

    useEffect(() => {
        if(pointsWithCoordinates.length > 0){
            if (!idCityLocal){
                dispatch(changeCoordinates(pointsWithCoordinates[0].coordinates))
            }
            else{
                pointsWithCoordinates.map((point, index) => {
                    if (point.cityId.id === idCityLocal) {
                        dispatch(changeCoordinates(pointsWithCoordinates[index].coordinates))
                    }
                })
            }
            dispatch(changeZoom(10))
        }
    }, [pointsWithCoordinates])

    const getPointsCoordinates = () => {
        let promises:any = [];
        points.map(point => {
            promises.push(getCoordinates(`${point.cityId.name}, ${point.address}`))
        })
        Promise.all(promises).then(
            response => {
                let newArray = points;
                newArray.map((item, index) =>
                    // @ts-ignore
                    item.coordinates = response[index])
                setPointsWithCoordinates(newArray)
            }
        )
            .catch(error => console.log(error))

    }
    const onChangeIdCity = (e: ChangeEvent<HTMLSelectElement>) => {
        const id = e.target.value
        dispatch(fetchPointsForCity(id))
        setIdCityLocal(id)
        setValueInput("")
    }
    const onChangePoint = (e: ChangeEvent<HTMLInputElement>) => {
        setValueInput(e.target.value)
        pointsWithCoordinates.map(point => {
            if(point.address === e.target.value){
                dispatch(changePickUpPoint(point.cityId.name, e.target.value))
                dispatch(changeStateButton(true))
                dispatch(changeZoom(16))
                dispatch(changeCoordinates(point.coordinates))
                dispatch(changePoint(e.target.value))
                dispatch(changeIdCity(point.cityId.id))
            }
        })
    }
    const onClickPoint = (point: IPoint) => {
        setValueInput(point.address)
        dispatch(changeZoom(16))
        dispatch(changeStateButton(true))
        dispatch(changeCoordinates(point.coordinates))
        dispatch(changePoint(point.address))
        dispatch(changePickUpPoint(point.cityId.name, point.address))
        dispatch(changeIdCity(point.cityId.id))
    }


    return(
        <div className={styles.location}>
            <div className={styles.enterDataBlock}>
                <div>
                    <span>Город</span>
                    <select onChange={onChangeIdCity}>
                        {cities.map((city) =>
                            <option
                                key={city.id}
                                value={city.id}
                                selected={idCity === city.id}
                            >
                                {city.name}
                            </option>
                        )}
                    </select>
                </div>
                <div>
                    <span>Пункт выдачи</span>
                    <input
                        list="brow"
                        placeholder={"Начните вводить пункт ..."}
                        value={valueInput} onChange={onChangePoint}
                    />
                    <datalist id="brow">
                        {points.map(point =>
                            <option value={point.address}/>
                        )}
                    </datalist>
                </div>
            </div>
            <div className={styles.mapBlock}>
                <span>Выбрать на карте:</span>
                <YMaps>
                    <Map
                        state={{ center: coordinates, zoom: zoomDefault }}
                    >
                        {pointsWithCoordinates.map((point) =>
                            <Placemark
                                key={point.id}
                                geometry={
                                    point.coordinates
                                }
                                properties={
                                    {
                                        balloonContent:
                                            `<strong>Информация о пункте выдачи</strong> <hr/> Адрес: ${point.address}`
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