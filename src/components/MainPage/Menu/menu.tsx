import React, {useState} from "react"
import "./menu.scss"
import facebook from "./Facebook_white.svg"
import instagram from "./Instagram_white.svg"
import telegram from "./Telegram_white.svg"
const Menu:React.FC = () => {
    const [active, setActive] = useState<boolean>(false)
    return(
        <div className={active ? "menuActivated" : "menuClosed"}>
            <div className={`${active ? "activeBurButton" : ""} burButton`} onClick={() => setActive(state => !state)}>
                <span/>
            </div>

            {active
                ?
                <div className={"block"}>
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
                :
                <div className={"changeLanguageButton"}>
                    Eng
                </div>
            }
        </div>
    )
};

export default Menu