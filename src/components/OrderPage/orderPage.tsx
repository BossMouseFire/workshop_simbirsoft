import React, {useState} from "react"
import Menu from "../Menu/menu";
import styles from "./orderPage.module.scss"
import Location from "./Location/location";
import nextIcon from "./next.svg"
import cn from "classnames"
import cnBind from "classnames/bind"

const cx = cnBind.bind(styles)
const OrderPage:React.FC = () => {
    const [stateCheck, setStateCheck] = useState<boolean>(false);
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
                        <span className={styles.activatedAction}>
                            Местоположение
                        </span>
                        <div/>
                        <span className={styles.blockedAction}>
                            Модель
                        </span>
                        <div/>
                        <span className={styles.blockedAction}>
                            Дополнительно
                        </span>
                        <div/>
                        <span className={styles.blockedAction}>
                            Итого
                        </span>
                    </div>
                    <div className={styles.line}/>
                </div>
                <div className={styles.blockAction}>
                    <Location/>
                    <div className={styles.verticalLine}/>
                    <div className={cn(styles.check, cx({checkActive: stateCheck}))}>
                        <div className={styles.head}>
                            Ваш заказ:
                        </div>
                        <div className={styles.requisites}>
                            <div>
                                <span>Пункт выдачи</span>
                                <span>Ульяновск, Нариманова 42</span>
                            </div>
                        </div>
                        <div className={styles.priceBlock}>
                            <span>Цена:</span>
                            <span>от 10000 до 32000 ₽</span>
                        </div>
                        <div className={styles.buttonAction}>
                            Выбрать модель
                        </div>
                    </div>
                    <div onClick={() => setStateCheck(state => !state)}>
                        <img src={nextIcon} className={cn(styles.nextIcon, cx({nextIconActive: stateCheck}))}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default OrderPage;