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

const cx = cnBind.bind(styles)
const OrderPage:React.FC = () => {
    const [stateCheck, setStateCheck] = useState<boolean>(false);
    const refHelp = useRef() as React.MutableRefObject<HTMLDivElement>;
    const [numberBlock, setNumberBlock] = useState<number>(0)
    const [currentBlock, setCurrentBlock] = useState<number>(0)
    const [stateHelpBlock, setStateHelpBlock] = useState<boolean>(false)

    useEffect(() => {
        setTimeout(() => {
            if(window.innerWidth < 1024 && !stateHelpBlock){
                refHelp.current.classList.add(styles.activeHelpBlock)
            }
        }, 3000)
    }, [])

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
            </div>
        </>
    )
}
export default OrderPage;