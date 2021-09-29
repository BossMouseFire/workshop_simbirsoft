import React, {useRef, useState} from "react"
import Menu from "../Menu/menu";
import styles from "./orderPage.module.scss"
import Location from "./Location/location";
import nextIcon from "./next.svg"
import cn from "classnames"
import cnBind from "classnames/bind"
import Check from "./Check/check";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {useDispatch} from "react-redux";
import {changeCurrentBlock} from "../../store/actionCreators/check";

const cx = cnBind.bind(styles)
const OrderPage:React.FC = () => {
    const [stateCheck, setStateCheck] = useState<boolean>(false);
    const refActions = useRef() as React.MutableRefObject<HTMLDivElement>;
    const {currentBlock} = useTypeSelector(state => state.check)
    const dispatch = useDispatch()
    const onChangeCurrentBlock = (number: number) => {
        dispatch(changeCurrentBlock(number))
    }
    return(
        <>
            <Menu/>
            <div className={styles.orderPage}>
                <div className={styles.upper}>
                    <span>
                        Need for drive
                    </span>
                    <span>
                        Ульяновск
                    </span>
                </div>
                <div className={styles.blockActions}>
                    <div className={styles.line}/>
                    <div className={styles.actions} ref={refActions}>
                        <span className={cx({activatedAction: currentBlock == 0})}
                              onClick={() => onChangeCurrentBlock(0)}>
                            Местоположение
                        </span>
                        <div/>
                        <span className={cn(styles.blockedAction, cx({activatedAction: currentBlock == 1}))}
                              onClick={() => onChangeCurrentBlock(1)}>
                            Модель
                        </span>
                        <div/>
                        <span className={cn(styles.blockedAction, cx({activatedAction: currentBlock == 2}))}
                              onClick={() => onChangeCurrentBlock(2)}>
                            Дополнительно
                        </span>
                        <div/>
                        <span className={cn(styles.blockedAction, cx({activatedAction: currentBlock == 3}))}
                              onClick={() => onChangeCurrentBlock(3)}>
                            Итого
                        </span>
                    </div>
                    <div className={styles.line}/>
                </div>
                <div className={styles.blockAction}>
                    {
                        currentBlock === 0 ? <Location/> : <div></div>

                    }
                    <div className={styles.verticalLine}/>
                    <Check stateCheck={stateCheck} refActions={refActions}/>
                    <div onClick={() => setStateCheck(state => !state)}>
                        <img src={nextIcon} className={cn(styles.nextIcon, cx({nextIconActive: stateCheck}))}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default OrderPage;