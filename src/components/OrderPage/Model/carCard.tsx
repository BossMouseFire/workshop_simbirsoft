import React from 'react'
import styles from "./model.module.scss";
import {ICar, ICarCard} from "../../../types/cars";
import {useDispatch} from "react-redux";
import {useTypeSelector} from "../../../hooks/useTypeSelector";
import cn from "classnames"
import cnBind from "classnames/bind"
import {changeIdCar} from "../../../store/actionCreators/model";
import {changeColorSelected, changeModel, changePrice} from "../../../store/actionCreators/check";
import {convertUrlImg} from "../../../utils/utils";
import {changeColorLocal} from "../../../store/actionCreators/additional";

const cx = cnBind.bind(styles)

const CarCard:React.FC<ICarCard> = ({car}) => {
    const dispatch = useDispatch()
    const {idCar} = useTypeSelector(state => state.model)

    const onChangeCar = (car: ICar) => {
        console.log(car)
        dispatch(changePrice(car.priceMin, car.priceMax))
        dispatch(changeModel(car))
        dispatch(changeIdCar(car.id))
        dispatch(changeColorLocal("Любой"))
        dispatch(changeColorSelected("Любой"))
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