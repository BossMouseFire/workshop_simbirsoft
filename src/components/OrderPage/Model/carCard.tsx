import React from 'react'
import styles from "./model.module.scss";
import {ICarCard} from "../../../types/cars";

const CarCard:React.FC<ICarCard> = ({car}) => {

    const convertUrlImg = (path: string) => {
        if (path.indexOf("file") !== -1){
            return `https://api-factory.simbirsoft1.com${path}`
        }
        return path
    }

    return(
        <div className={styles.car} key={car.id}>
            <span className={styles.name}>{car.name}</span>
            <div className={styles.price}>
                <span>{car.priceMin}</span>
                <span> - </span>
                <span>{car.priceMax} ₽</span>
            </div>
            <div className={styles.carImg}>
                <img src={convertUrlImg(car.thumbnail.path)}/>
            </div>
        </div>
    )
}

export default CarCard