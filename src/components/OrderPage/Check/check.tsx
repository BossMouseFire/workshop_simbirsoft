import React, {MutableRefObject} from 'react'
import styles from "../orderPage.module.scss";
import cn from "classnames"
import cnBind from "classnames/bind"
import {useTypeSelector} from "../../../hooks/useTypeSelector";
import {useDispatch} from "react-redux";
import {changeCurrentBlock, openBlockedBlock} from "../../../store/actionCreators/check";

const cx = cnBind.bind(styles)

interface ICheck{
    stateCheck: boolean,
}

const Check:React.FC<ICheck> = ({stateCheck}) => {
    const {pickUpPoint, activeButton, currentBlock, blockedBlock} = useTypeSelector(state => state.check)
    const dispatch = useDispatch()

    const onChangeCurrentBlock = () => {
        dispatch(openBlockedBlock(blockedBlock + 1))
        dispatch(changeCurrentBlock(currentBlock + 1))
    }
    return(
        <div className={cn(styles.check, cx({checkActive: stateCheck}))}>
            <div className={styles.head}>
                Ваш заказ:
            </div>
            <div className={styles.requisites}>
                <div>
                    <span>Пункт выдачи</span>
                    <span>{pickUpPoint != "" ? pickUpPoint : 'Не выбран'}</span>
                </div>
            </div>
            <div className={styles.priceBlock}>
                <span>Цена:</span>
                <span>от 10000 до 32000 ₽</span>
            </div>
            <div className={cn(styles.buttonAction, cx({blockButtonAction: !activeButton}))} onClick={() => onChangeCurrentBlock()}>
                Выбрать модель
            </div>
        </div>
    )
}

export default Check