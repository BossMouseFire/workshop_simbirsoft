import React from 'react'
import styles from "./model.module.scss";
import {ICarCard} from "../../../types/cars";
import {useDispatch} from "react-redux";
import {useTypeSelector} from "../../../hooks/useTypeSelector";
import cn from "classnames"
import cnBind from "classnames/bind"
import {changeIdCar} from "../../../store/actionCreators/model";
import {changeModel} from "../../../store/actionCreators/check";

const cx = cnBind.bind(styles)


const CarCard:React.FC<ICarCard> = ({car}) => {
    const dispatch = useDispatch()
    const {idCar} = useTypeSelector(state => state.model)

    const convertUrlImg = (path: string) => {
        if (path.indexOf("file") !== -1){
            return `https://api-factory.simbirsoft1.com${path}`
        }
        return path
    }

    const onChangeIdCar = (id: string, model: string) => {
        dispatch(changeModel(model))
        dispatch(changeIdCar(id))
    }

    return(
        <div
            className={
                cn(styles.car, cx({carActivated: idCar === car.id}))}
            key={car.id}
            onClick={() => onChangeIdCar(car.id, car.name)}
        >
            <span className={styles.name}>{car.name}</span>
            <div className={styles.price}>
                <span>{car.priceMin}</span>
                <span> - </span>
                <span>{car.priceMax} ₽</span>
            </div>
            <div className={styles.carImg}>
                <img src={convertUrlImg(car.thumbnail.path)} alt={car.name}/>
            </div>
        </div>
    )
}

export default CarCard