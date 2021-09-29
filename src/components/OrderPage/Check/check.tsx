import React, {MutableRefObject} from 'react'
import styles from "../orderPage.module.scss";
import cn from "classnames"
import cnBind from "classnames/bind"
import {useTypeSelector} from "../../../hooks/useTypeSelector";
import {useDispatch} from "react-redux";
import {changeCurrentBlock} from "../../../store/actionCreators/check";

const cx = cnBind.bind(styles)

interface ICheck{
    stateCheck: boolean,
    refActions: MutableRefObject<HTMLDivElement>;
}

const Check:React.FC<ICheck> = ({stateCheck, refActions}) => {
    const {pickUpPoint, activeButton, currentBlock} = useTypeSelector(state => state.check)
    const dispatch = useDispatch()

    const onChangeCurrentBlock = () => {
        const actions = refActions.current.querySelectorAll('span');
        for (let i = 0; i < actions.length; i++) {
            if(actions[i].classList.contains('orderPage_blockedAction__1c69U')){
                actions[i].classList.remove('orderPage_blockedAction__1c69U')
                console.log('test')
                break
            }
        }
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