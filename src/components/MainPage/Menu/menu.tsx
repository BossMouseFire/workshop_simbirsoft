import React, {useState} from "react"
import "./menu.scss"
import facebook from "./images/Facebook_white.svg"
import instagram from "./images/Instagram_white.svg"
import telegram from "./images/Telegram_white.svg"
const Menu:React.FC = () => {
    const [active, setActive] = useState<boolean>(false)
    return(
        <div className={active ? "menuActivated" : "menuClosed"}>
            <div className={`${active ? "activeBurButton" : ""} burButton`} onClick={() => setActive(state => !state)}>
                <span/>
            </div>
            <div className={`${active ? "" : "blockUnactivated"} block`}>
                <div className={"blockAction"}>
                    <span>ПАРКОВКА</span>
                    <span>СТРАХОВКА</span>
                    <span>БЕНЗИН</span>
                    <span>ОБСЛУЖИВАНИЕ</span>
                </div>
                <div className={"socialNetworks"}>
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
            <div className={`${active ? "changeLanguageButtonUnactivated" : ""} changeLanguageButton`}>
                Eng
            </div>
        </div>
    )
};

export default Menu