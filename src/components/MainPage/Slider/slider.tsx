import React, {useEffect, useState} from "react"
import arrow from "./images/arrow.svg"
import "./slider.scss"
import {SliderData} from "./slidersData";
import Slide from "./slide";
const Slider:React.FC = () => {
    const [position, setPosition] = useState<number>(0)
    const [arrayPositions, setArrayPositions] = useState<number[] | []>([])

    useEffect(() => {
        let array = []
        for(let i = 0; i < SliderData.length; i++){
            array.push(i)
        }
        setArrayPositions(array)
    }, [])

    const goToNextSlide = () => {
        const newPosition = position === SliderData.length - 1 ? 0 : position + 1;
        setPosition(newPosition)
    };
    const goToPrevSlide = () => {
        const newPosition = position === 0 ? SliderData.length - 1 : position - 1;
        setPosition(newPosition)
    };

    return(
        <div className={"sliderWrapper"}>
            <div onClick={goToPrevSlide} className={"arrowPrev arrow"}>
                <img src={arrow}/>
            </div>
            <div onClick={goToNextSlide} className={"arrowNext arrow"}>
                <img src={arrow}/>
            </div>
            <div
                className={"sliderInner"}
                style={{
                    transition: "transform ease 700ms",
                    transform: `translateX(-${position * 100}%)`,
                }}
            >
                {SliderData.map(sliderInfo =>
                    <Slide information={sliderInfo}/>
                )}
            </div>
            <div className={"blockNumberOfSlides"}>
                {arrayPositions.map(index =>
                    <div className={`${index === position ? "activeSlideNumber" : ""}`}>

                    </div>
                )}
            </div>
        </div>
    )
}

export default Slider;