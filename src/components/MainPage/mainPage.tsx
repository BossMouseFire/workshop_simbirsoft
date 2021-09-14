import React from "react"
import Menu from "./Menu/menu";
import "./mainPage.scss"

const MainPage:React.FC = () => {
    return (
        <div className={"mainPage"}>
            <Menu/>
            <div className={"aboutProject"}>
                <div className={"upperPanel"}>
                    <span>
                        Need for drive
                    </span>
                    <span>
                        Ульяновск
                    </span>
                </div>
                <div className={"mainPart"}>
                    <span>
                        Каршеринг
                    </span>
                    <span>
                        Need for drive
                    </span>
                    <span>
                        Поминутная аренда авто твоего города
                    </span>
                    <div>
                        Забронировать
                    </div>
                </div>
                <div className={"bottomPanel"}>
                    <span>
                        © 2016-2019 «Need for drive»
                    </span>
                    <span>
                        <a href={"tel:+74952342244"}>
                            8 (495) 234-22-44
                        </a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default MainPage