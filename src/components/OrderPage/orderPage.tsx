import React from "react"
import Menu from "../Menu/menu";
import styles from "./orderPage.module.scss"
import Location from "./Location/location";
const OrderPage:React.FC = () => {
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
                    <div>

                    </div>
                </div>
            </div>
        </>
    )
}
export default OrderPage;