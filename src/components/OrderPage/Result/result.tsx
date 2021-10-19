import React from "react";
import styles from "./result.module.scss";
import { useTypeSelector } from "../../../hooks/useTypeSelector";
import ResultOrder from "./resultOrder";

const Result: React.FC = () => {
  const { model, dateStart, fullTank, rightHandDrive, babyChair } =
    useTypeSelector((state) => state.check);

  return (
    <div className={styles.result}>
      <ResultOrder
        model={model}
        dateStart={dateStart}
        fullTank={fullTank}
        rightHandDrive={rightHandDrive}
        babyChair={babyChair}
      />
    </div>
  );
};

export default Result;
