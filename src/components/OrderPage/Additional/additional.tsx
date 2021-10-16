import React, {ChangeEvent, useEffect, useState} from "react";
import styles from './additional.module.scss'
import {useTypeSelector} from "../../../hooks/useTypeSelector";
import {useDispatch} from "react-redux";
import {
    changeBabyChair,
    changeColorSelected, changeDate, changeFullTank,
    changeLease, changeRightHandDrive,
    changeTariff,
    changeTotalPrice
} from "../../../store/actionCreators/check";
import {
    changeBabyChairLocal,
    changeColorLocal,
    changeDateLocal,
    changeFullTankLocal, changeRightHandDriveLocal,
    changeTariffLocal
} from "../../../store/actionCreators/additional";
import {getRates} from "../../../api/api";
import {IRate} from "../../../types/api";
const Additional:React.FC = () => {
    const dispatch = useDispatch()
    const {model, lease, priceMin, priceTotal} = useTypeSelector(state => state.check)
    const {colorLocal, dateStartLocal,
        dateEndLocal, tariffLocal,
        fullTankState, babyChairState,
        rightHandDriveState} = useTypeSelector(state => state.additional)
    const [dateStart, setDateStart] = useState<string>("")
    const [rates, setRates] = useState<IRate[]>([])
    useEffect(() => {
       getRates()
           .then(response => {
               setRates(response.data.data)
           })
    }, [])

    const changeInputType = (e: ChangeEvent<HTMLInputElement>) => {
        e.target.type = 'datetime-local'
        e.target.focus()
    }

    const changeColor = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(changeColorLocal(e.target.value))
        dispatch(changeColorSelected(e.target.value))
    }

    const changeDateStartLocal = (e: ChangeEvent<HTMLInputElement>) => {
        setDateStart(e.target.value)
    }

    const changeDurationLease = (e: ChangeEvent<HTMLInputElement>) => {
        const dateStartToSecond = Date.parse(dateStart) / 1000
        const dateEndToSecond = Date.parse(e.target.value) / 1000
        const leaseToMinute = Math.ceil((dateEndToSecond - dateStartToSecond) / 60)
        dispatch(changeDate(dateStart, e.target.value))
        dispatch(changeDateLocal(dateStart, e.target.value))
        dispatch(changeLease(leaseToMinute))
    }

    const changeTariffLease = (tariff: IRate) => {
        let price;
        switch (tariff.rateTypeId.unit){
            case "мин":
                price = lease * tariff.price
                break
            case "сутки":
                price = Math.ceil(lease / 1440) * tariff.price
                break
            case "7 дней":
                price = Math.ceil(lease / 10080) * tariff.price
                break
            case "30 дней":
                price = Math.ceil(lease / 43200) * tariff.price
                break
            default:
                price = 0
        }
        dispatch(changeTotalPrice(priceMin + price))
        dispatch(changeTariff(tariff))
        dispatch(changeTariffLocal(tariff))
    }

    const changeAddServices = (nameState: string) => {
        switch (nameState){
            case "tank":
                if(!fullTankState){
                    dispatch(changeTotalPrice(priceTotal + 500))
                } else{
                    dispatch(changeTotalPrice(priceTotal - 500))
                }
                dispatch(changeFullTankLocal(!fullTankState))
                dispatch(changeFullTank(!fullTankState))
                break
            case "babyChair":
                if(!babyChairState){
                    dispatch(changeTotalPrice(priceTotal + 200))
                } else{
                    dispatch(changeTotalPrice(priceTotal - 200))
                }
                dispatch(changeBabyChairLocal(!babyChairState))
                dispatch(changeBabyChair(!babyChairState))
                break
            case "handDrive":
                if(!rightHandDriveState){
                    dispatch(changeTotalPrice(priceTotal + 1600))
                } else{
                    dispatch(changeTotalPrice(priceTotal - 1600))
                }
                dispatch(changeRightHandDriveLocal(!rightHandDriveState))
                dispatch(changeRightHandDrive(!rightHandDriveState))
                break
        }
    }
    return(
        <div className={styles.additional}>
            <div className={styles.colorsBlock}>
                <span>Цвет</span>
                <div className={styles.color}>
                    <div>
                        <input
                            type={"radio"}
                            value={"Любой"}
                            checked={colorLocal === "Любой"}
                            onChange={changeColor}
                        />
                        <span>Любой</span>
                    </div>
                    {model.colors.map(color =>
                        <div>
                            <input
                                type={"radio"}
                                value={color[0].toUpperCase() + color.slice(1)}
                                checked={colorLocal === (color[0].toUpperCase() + color.slice(1))}
                                onChange={changeColor}
                            />
                            <span>{color[0].toUpperCase() + color.slice(1)}</span>
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.inputBlock}>
                <span>Дата аренды</span>
                <div>
                    <span>C</span>
                    <input
                        type={!dateEndLocal ? 'text' : "datetime-local"}
                        placeholder={"Введите дату и время"}
                        value={dateStartLocal ? dateStartLocal : dateStart}
                        onFocus={changeInputType}
                        onChange={changeDateStartLocal}
                    />
                </div>
                <div>
                    <span>По</span>
                    <input
                        type={!dateEndLocal ? 'text' : "datetime-local"}
                        placeholder={"Введите дату и время"}
                        value={dateEndLocal}
                        disabled={dateEndLocal ? !dateEndLocal : !dateStart}
                        min={dateStart}
                        onFocus={changeInputType}
                        onChange={changeDurationLease}
                    />
                </div>
            </div>
            <div className={styles.tariffBlock}>
                <span>Тариф</span>
                {
                    rates.map(rate =>
                        <div>
                            <input
                                type="radio"
                                checked={tariffLocal.id === rate.id}
                                onChange={() => changeTariffLease(rate)}
                            />
                            <span>{`${rate.rateTypeId.name}, ${rate.price} ₽/${rate.rateTypeId.unit}`}</span>
                        </div>
                    )
                }
            </div>
            <div className={styles.addBlock}>
                <span>Доп услуги</span>
                <div>
                    <input
                        type="checkbox"
                        checked={fullTankState}
                        onChange={() => changeAddServices('tank')}

                    />
                    <span>Полный бак, 500р</span>
                </div>
                <div>
                    <input
                        type="checkbox"
                        checked={babyChairState}
                        onChange={() => changeAddServices('babyChair')}
                    />
                    <span>Детское кресло, 200р</span>
                </div>
                <div>
                    <input
                        type="checkbox"
                        checked={rightHandDriveState}
                        onChange={() => changeAddServices('handDrive')}
                    />
                    <span>Правый руль, 1600р</span>
                </div>
            </div>
        </div>
    )
}
export default Additional