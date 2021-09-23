import React from "react"
import {ISlide} from '../type'
import styles from "./slider.module.scss"
interface ISlideInfo{
    information: ISlide
}

const Slide:React.FC<ISlideInfo> = ({information}) => {
    return(
        <div className={styles.slide} style={{backgroundImage: information.imageUrl}}>
            <div className={styles.content}>
                <div className={styles.head}>
                    {information.head}
                </div>
                <div className={styles.mainText}>
                    {information.mainText}
                </div>
                <div className={styles.about} style={{background: information.backgroundButton}}>
                    <p>
                        Подробнее
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Slide