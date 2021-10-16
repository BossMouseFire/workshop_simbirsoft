import React, {Dispatch, SetStateAction} from 'react'
import styles from "../orderPage.module.scss";
import cn from "classnames"
import cnBind from "classnames/bind"
import {useTypeSelector} from "../../../hooks/useTypeSelector";
import {isEmptyObject} from "../../../utils/utils";

const cx = cnBind.bind(styles)

interface ICheck{
    stateCheck: boolean,
    numberBlock: number,
    currentBlock: number,
    setNumberBlock: Dispatch<SetStateAction<number>>,
    setCurrentBlock: Dispatch<SetStateAction<number>>,
    setStateConfirmModal: Dispatch<SetStateAction<boolean>>
}

const Check:React.FC<ICheck> = ({
        stateCheck,
        numberBlock,
        currentBlock,
        setNumberBlock,
        setCurrentBlock,
        setStateConfirmModal
    }) => {
    const {
        city,
        pickUpPoint,
        model,
        priceMin,
        priceMax,
        colorSelected,
        priceTotal,
        tariff,
        lease,
        rightHandDrive,
        babyChair,
        fullTank
    } = useTypeSelector(state => state.check)

    const onChangeCurrentBlock = () => {
        if(currentBlock !== 3){
            if (currentBlock === numberBlock){
                setNumberBlock(state => state + 1)
            }
            setCurrentBlock(state => state + 1)
        } else{
            setStateConfirmModal(true)
        }
    }

    const changeStateButton = () => {
        switch (currentBlock){
            case 0:
                return city && pickUpPoint;
            case 1:
                return city && pickUpPoint && model.name;
            case 2:
                return city && pickUpPoint && model.name && colorSelected && lease && tariff;
            case 3:
                return city && pickUpPoint && model.name && colorSelected && lease && tariff;
            default:
                return false
        }
    }
    const changeButtonBlock = () => {
        switch (currentBlock){
            case 0:
                return "Выбрать модель"
            case 1:
                return "Дополнительно"
            case 2:
                return "Итого"
            case 3:
                return "Заказать"
            default:
                return "Отмена"
        }
    }
    const convertLease = (lease: number) => {
        const days = Math.floor(lease / 1440)
        const hours = Math.floor((lease - days * 1440) / 60)
        const minutes = lease - days * 1440 - hours * 60
        if(days) {
            return `${days} д ${hours ? hours + ' ч' : ''}`
        } else if(hours) {
            return `${hours} ч ${minutes ? minutes + ' м' : ''}`
        } else {
            return `${minutes} м`
        }
    }
    return(
        <div className={cn(styles.check, cx({checkActive: stateCheck}))}>
            <div className={styles.head}>
                Ваш заказ:
            </div>
            <div className={styles.requisites}>
                <div>
                    <span>Пункт выдачи</span>
                    <span>{pickUpPoint.name ? `${city.name}, ${pickUpPoint.address}` : 'Не выбран'}</span>
                </div>
                {
                    numberBlock > 0 &&
                        <div>
                            <span>Модель</span>
                            <span>{model.name ? model.name : 'Не выбран'}</span>
                        </div>
                }
                {
                    numberBlock > 1 &&
                        <>
                            <div>
                                <span>Цвет</span>
                                <span>{colorSelected ? colorSelected : 'Не выбран'}</span>
                            </div>
                            <div>
                                <span>Длительность аренды</span>
                                <span>{lease ? convertLease(lease) : '-'}</span>
                            </div>
                            <div>
                                <span>Тариф</span>
                                <span>{!isEmptyObject(tariff) ? tariff.rateTypeId.name : 'Не выбран'}</span>
                            </div>
                        </>
                }
                {
                    fullTank &&
                    <div>
                        <span>Полный бак</span>
                        <span>{fullTank ? 'Да' : ''}</span>
                    </div>
                }
                {
                    babyChair &&
                    <div>
                        <span>Детское кресло</span>
                        <span>{babyChair ? 'Да' : ''}</span>
                    </div>
                }
                {
                    rightHandDrive &&
                    <div>
                        <span>Правый руль</span>
                        <span>{rightHandDrive ? 'Да' : ''}</span>
                    </div>
                }
            </div>
            <div className={styles.priceBlock}>
                <span>Цена: </span>
                {
                    numberBlock <= 1 && <span>от {priceMin} до {priceMax} ₽</span>
                }
                {
                    numberBlock > 1 && <span>{priceTotal} ₽</span>
                }
            </div>
            <div
                className={
                    cn(styles.buttonAction,
                        cx({blockButtonAction: !changeStateButton()}))
                }
                onClick={() => onChangeCurrentBlock()}>
                {changeButtonBlock()}
            </div>
        </div>
    )
}

export default Check