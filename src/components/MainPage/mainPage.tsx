import React from "react";
import Menu from "../Menu/menu";
import styles from "./mainPage.module.scss";
import Slider from "./Slider/slider";
import { useHistory } from "react-router";

const MainPage: React.FC = () => {
  const history = useHistory();
  return (
    <div className={styles.mainPage}>
      <Menu />
      <div className={styles.aboutProject}>
        <div className={styles.upper}>
          <span>Need for drive</span>
          <span>Ульяновск</span>
        </div>
        <div className={styles.mainPart}>
          <span>Каршеринг</span>
          <span>Need for drive</span>
          <span>Поминутная аренда авто твоего города</span>
          <div onClick={() => history.push("/order")}>
            <p>Забронировать</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <span>© 2016-2019 «Need for drive»</span>
          <span>
            <a href={"tel:+74952342244"}>8 (495) 234-22-44</a>
          </span>
        </div>
      </div>
      <Slider />
    </div>
  );
};

export default MainPage;
