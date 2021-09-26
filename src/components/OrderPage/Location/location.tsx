import React from 'react'
import styles from './location.module.scss'
import {LocationData} from "./locationData";

const Location:React.FC = () => {
    return(
        <div className={styles.location}>
            <div className={styles.enterDataBlock}>
                <div>
                    <span></span>
                    <select>

                    </select>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}

export default Location