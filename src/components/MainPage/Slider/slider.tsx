import React, { useState } from "react";
import arrow from "./images/arrow.svg";
import { SliderData } from "./slidersData";
import Slide from "./slide";
import styles from "./slider.module.scss";
import cn from "classnames";
import cnBind from "classnames/bind";

const cx = cnBind.bind(styles);
const Slider: React.FC = () => {
  const [position, setPosition] = useState<number>(0);

  const goToNextSlide = () => {
    const newPosition = position === SliderData.length - 1 ? 0 : position + 1;
    setPosition(newPosition);
  };
  const goToPrevSlide = () => {
    const newPosition = position === 0 ? SliderData.length - 1 : position - 1;
    setPosition(newPosition);
  };

  return (
    <div className={styles.wrapper}>
      <div
        onClick={goToPrevSlide}
        className={cn(styles.arrowPrev, styles.arrow)}
      >
        <img src={arrow} />
      </div>
      <div
        onClick={goToNextSlide}
        className={cn(styles.arrowNext, styles.arrow)}
      >
        <img src={arrow} />
      </div>
      <div
        className={styles.inner}
        style={{
          transition: "transform ease 700ms",
          transform: `translateX(-${position * 100}%)`,
        }}
      >
        {SliderData.map((sliderInfo) => (
          <Slide information={sliderInfo} />
        ))}
      </div>
      <div className={styles.blockNumbers}>
        {SliderData.map((slide, index) => (
          <div className={cx({ activeSlide: index === position })} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
