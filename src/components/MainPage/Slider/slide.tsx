import React from "react"
import {ISlide} from '../type'
import './slider.scss'
interface ISlideInfo{
    information: ISlide
}

const Slide:React.FC<ISlideInfo> = ({information}) => {
    return(
        <div className={"slide"} style={{backgroundImage: information.imageUrl}}>
            <div className={"content"}>
                <div className={"headSlide"}>
                    {information.head}
                </div>
                <div className={"mainTextSlide"}>
                    {information.mainText}
                </div>
                <div className={"aboutSlide"}>
                    <p>
                        Подробнее
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Slide