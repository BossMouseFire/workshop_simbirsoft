import React, {useEffect, useRef, useState} from "react"
import Menu from "../Menu/menu";
import styles from "./orderPage.module.scss"
import Location from "./Location/location";
import nextIcon from "./next.svg"
import cn from "classnames"
import cnBind from "classnames/bind"
import Check from "./Check/check";
import Model from "./Model/model";
import Additional from "./Additional/additional";
import Result from "./Result/result";
import ConfirmModal from "./confirmModal";
import {getOrderById} from "../../api/api";
import {IResponseOrder} from "../../types/api";
import ConfirmOrder from "./Order/confirmOrder";

const cx = cnBind.bind(styles)
const OrderPage:React.FC = () => {
    const [stateCheck, setStateCheck] = useState<boolean>(false);
    const refHelp = useRef() as React.MutableRefObject<HTMLDivElement>;
    const [numberBlock, setNumberBlock] = useState<number>(0)
    const [currentBlock, setCurrentBlock] = useState<number>(0)
    const [stateHelpBlock, setStateHelpBlock] = useState<boolean>(false)
    const [stateConfirmModal, setStateConfirmModal] = useState<boolean>(false)
    const [isGetOrder, setIsGetOrder] = useState<boolean>(false)
    const [responseOrder, setResponseOrder] = useState<IResponseOrder>({} as IResponseOrder)

    useEffect(() => {
        const url = window.location.href.split('/')
        const id = url[url.length - 1]
        if (id && id !== 'order') {
            getOrderById(id)
                .then(response => {
                    setResponseOrder(response.data)
                    setIsGetOrder(true)
                })
                .catch(error => {
                    addHelpBlock()
                    console.log(error)
                })
        } else{
            addHelpBlock()
        }
    }, [])

    const addHelpBlock = () => {
        setTimeout(() => {
            if(window.innerWidth < 1024 && !stateHelpBlock){
                refHelp.current.classList.add(styles.activeHelpBlock)
            }
        }, 3000)
    }

    const changeStateCheck = () => {
        refHelp.current.classList.remove(styles.activeHelpBlock)
        setStateHelpBlock(true)
        setStateCheck(state => !state)
    }

    const changeCurrentNumberBlock = (number: number) => {
        setCurrentBlock(number)
    }

    const changeCurrentBlock = () => {
        switch (currentBlock) {
            case 0:
                return <Location/>
            case 1:
                return <Model/>
            case 2:
                return <Additional/>
            case 3:
                return <Result/>
        }
    }
    return(
        <div className={styles.orderPage}>
            <Menu/>
            <div className={styles.upper}>
                    <span>
                        Need for drive
                    </span>
                <span>
                        Ульяновск
                    </span>
            </div>
            {
                isGetOrder ?
                    <ConfirmOrder
                        data={responseOrder}
                        currentBlock={4}
                        numberBlock={4}
                    />
                    :
                    <>
                        <div className={styles.blockActions}>
                            <div className={styles.line}/>
                            <div className={styles.actions}>
                                <span className={cx({activatedAction: currentBlock === 0})}
                                      onClick={() => changeCurrentNumberBlock(0)}>
                                    Местоположение
                                </span>
                                <div/>
                                <span className={cn(cx(
                                    {blockedAction: numberBlock < 1},
                                    {activatedAction: currentBlock === 1}))}
                                      onClick={() => changeCurrentNumberBlock(1)}>
                                    Модель
                                </span>
                                <div/>
                                <span className={cn(cx(
                                    {blockedAction: numberBlock < 2},
                                    {activatedAction: currentBlock === 2}))}
                                      onClick={() => changeCurrentNumberBlock(2)}>
                                    Дополнительно
                                </span>
                                <div/>
                                <span className={cn(cx(
                                    {blockedAction: numberBlock < 3},
                                    {activatedAction: currentBlock === 3}))}
                                      onClick={() => changeCurrentNumberBlock(3)}>
                                    Итого
                                </span>
                            </div>
                            <div className={styles.line}/>
                        </div>
                        <div className={styles.blockAction}>
                            {changeCurrentBlock()}
                            <div className={styles.verticalLine}/>
                            <Check
                                stateCheck={stateCheck}
                                numberBlock={numberBlock}
                                setNumberBlock={setNumberBlock}
                                currentBlock={currentBlock}
                                setCurrentBlock={setCurrentBlock}
                                setStateConfirmModal={setStateConfirmModal}
                            />
                            <div className={styles.helpBlock} ref={refHelp}>
                                Нажмите на стрелку, чтобы продолжить
                            </div>
                            <div onClick={changeStateCheck}>
                                <img
                                    src={nextIcon}
                                    className={
                                        cn(styles.nextIcon,
                                            cx({nextIconActive: stateCheck}))
                                    }
                                />
                            </div>
                        </div>
                        <ConfirmModal
                            stateConfirmModal={stateConfirmModal}
                            setStateConfirmModal={setStateConfirmModal}
                        />
                    </>
            }
        </div>
    )
}
export default OrderPage;