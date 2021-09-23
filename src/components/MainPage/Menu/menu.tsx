import React, {useState} from "react"
import styles from "./menu.module.scss"
import cn from "classnames"
import cnBind from "classnames/bind"
import facebook from "./images/Facebook_white.svg"
import instagram from "./images/Instagram_white.svg"
import telegram from "./images/Telegram_white.svg"

const cx = cnBind.bind(styles)
const Menu:React.FC = () => {
    const [active, setActive] = useState<boolean>(false)
    const className = cx({menuActivated: active}, {menuClosed: !active})
    const burButtonClasses = cn(styles.burButton, cx({activeBurButton: active}))
    const blockClasses = cn(styles.block, cx({blockUnactivated: !active}))
    const languageButtonClasses = cn(styles.changeLanguageButton, cx({changeLanguageButtonUnactivated: active}))
    return(
        <div className={className}>
            <div className={burButtonClasses} onClick={() => setActive(state => !state)}>
                <span/>
            </div>
            <div className={blockClasses}>
                <div className={styles.blockAction}>
                    <span>ПАРКОВКА</span>
                    <span>СТРАХОВКА</span>
                    <span>БЕНЗИН</span>
                    <span>ОБСЛУЖИВАНИЕ</span>
                </div>
                <div className={styles.socialNetworks}>
                    <a href={"/"}>
                        <img src={telegram}/>
                    </a>
                    <a href={"/"}>
                        <img src={facebook}/>
                    </a>
                    <a href={"/"}>
                        <img src={instagram}/>
                    </a>
                </div>
            </div>
            <div className={languageButtonClasses}>
                Eng
            </div>
        </div>
    )
};

export default Menu