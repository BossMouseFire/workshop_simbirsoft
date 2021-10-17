import React from 'react'
import styles from "./result.module.scss";
import {convertNumberModel, convertUrlImg} from "../../../utils/utils";
import {ICar} from "../../../types/cars";

interface ResultOrder{
    model: ICar,
    dateStart: string,
    fullTank: boolean,
    rightHandDrive: boolean,
    babyChair: boolean
}

const ResultOrder:React.FC<ResultOrder> = ({model, dateStart, fullTank, rightHandDrive, babyChair}) => {
    return (
        <div className={styles.content}>
            <div className={styles.information}>
                <span className={styles.nameModel}>
                    {model.name}
                </span>
                <div className={styles.numberModel}>
                    {convertNumberModel(model.number)}
                </div>
                {
                    fullTank &&
                    <div className={styles.addInfo}>
                        <span>Топливо </span>
                        <span>100%</span>
                    </div>
                }
                {
                    babyChair &&
                    <div className={styles.addInfo}>
                        <span>Детское кресло - </span>
                        <span>Да</span>
                    </div>
                }
                {
                    rightHandDrive &&
                    <div className={styles.addInfo}>
                        <span>Правый руль - </span>
                        <span>Да</span>
                    </div>
                }
                <div className={styles.addInfo}>
                    <span>Доступна с </span>
                    <span>{dateStart}</span>
                </div>
            </div>
            <div className={styles.imgBlock}>
                <img src={convertUrlImg(model.thumbnail.path)}/>
            </div>
        </div>
    )
}

export default ResultOrder