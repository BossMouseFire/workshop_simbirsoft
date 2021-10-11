import React from 'react'
import styles from "./model.module.scss";
import {ICar, ICarCard} from "../../../types/cars";
import {useDispatch} from "react-redux";
import {useTypeSelector} from "../../../hooks/useTypeSelector";
import cn from "classnames"
import cnBind from "classnames/bind"
import {changeIdCar} from "../../../store/actionCreators/model";
import {changeModel, changePrice} from "../../../store/actionCreators/check";
import {convertUrlImg} from "../../../utils/utils";

const cx = cnBind.bind(styles)

const CarCard:React.FC<ICarCard> = ({car}) => {
    const dispatch = useDispatch()
    const {idCar} = useTypeSelector(state => state.model)

    const onChangeCar = (car: ICar) => {
        dispatch(changePrice(car.priceMin, car.priceMax))
        dispatch(changeModel(car.name))
        dispatch(changeIdCar(car.id))
    }

    return(
        <div
            className={
                cn(styles.car, cx({carActivated: idCar === car.id}))}
            key={car.id}
            onClick={() => onChangeCar(car)}
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