import React, {Dispatch, SetStateAction} from 'react'
import styles from "../orderPage.module.scss";
import cn from "classnames"
import cnBind from "classnames/bind"
import {useTypeSelector} from "../../../hooks/useTypeSelector";

const cx = cnBind.bind(styles)

interface ICheck{
    stateCheck: boolean,
    numberBlock: number,
    currentBlock: number,
    setNumberBlock: Dispatch<SetStateAction<number>>,
    setCurrentBlock: Dispatch<SetStateAction<number>>
}

const Check:React.FC<ICheck> = ({stateCheck, numberBlock, currentBlock, setNumberBlock, setCurrentBlock}) => {
    const {city, pickUpPoint, model} = useTypeSelector(state => state.check)

    const onChangeCurrentBlock = () => {
        if (currentBlock === numberBlock){
            setNumberBlock(state => state + 1)
        }
        setCurrentBlock(state => state + 1)
    }

    const changeStateButton = () => {
        switch (currentBlock){
            case 0:
                return city !== "" && pickUpPoint !== "";
            case 1:
                return city !== "" && pickUpPoint !== "" && model !== "";
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
    return(
        <div className={cn(styles.check, cx({checkActive: stateCheck}))}>
            <div className={styles.head}>
                Ваш заказ:
            </div>
            <div className={styles.requisites}>
                <div>
                    <span>Пункт выдачи</span>
                    <span>{pickUpPoint ? `${city}, ${pickUpPoint}` : 'Не выбран'}</span>
                </div>
                <div style={currentBlock > 0 ? {display: "flex"} : {display: "none"}}>
                    <span>Модель</span>
                    <span>{model ? model : 'Не выбран'}</span>
                </div>
            </div>
            <div className={styles.priceBlock}>
                <span>Цена: </span>
                <span>от 10000 до 32000 ₽</span>
            </div>
            <div className={cn(styles.buttonAction, cx({blockButtonAction: !changeStateButton()}))} onClick={() => onChangeCurrentBlock()}>
                {changeButtonBlock()}
            </div>
        </div>
    )
}

export default Check