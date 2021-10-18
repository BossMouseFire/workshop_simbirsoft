import React, { useEffect, useState } from "react";
import { IResponseOrder } from "../../../types/api";
import stylesOrderPage from "../orderPage.module.scss";
import stylesConfirmOrder from "./confirmOrder.module.scss";
import { changeAllState } from "../../../store/actionCreators/check";
import { useDispatch } from "react-redux";
import Check from "../Check/check";
import ResultOrder from "../Result/resultOrder";
import nextIcon from "../next.svg";
import cn from "classnames";
import cnBind from "classnames/bind";
import { useTypeSelector } from "../../../hooks/useTypeSelector";

const cx = cnBind.bind(stylesOrderPage);
interface IOrder {
  data: IResponseOrder["data"];
  numberBlock: number;
  currentBlock: number;
}

const ConfirmOrder: React.FC<IOrder> = ({
  numberBlock,
  currentBlock,
  data,
}) => {
  const dispatch = useDispatch();
  const [stateCheck, setStateCheck] = useState<boolean>(false);
  const { orderStatus } = useTypeSelector((state) => state.check);
  const { id, carId, dateFrom, isNeedChildChair, isRightWheel, isFullTank } =
    data;
  useEffect(() => {
    dispatch(changeAllState(data));
  }, []);

  const changeStateCheck = () => {
    setStateCheck((state) => !state);
  };
  const convertOrderName = () => {
    switch (orderStatus.id) {
      case "5e26a191099b810b946c5d89":
        return "Ваш новый заказ";
      case "5e26a1f0099b810b946c5d8b":
        return "Ваш заказ подтверждён";
      case "5e26a1f5099b810b946c5d8c":
        return "Ваш заказ отменён";
      case "6114e4502aed9a0b9b850846":
        return "Ваш временный заказ";
      default:
        return "Неизвестный тип заказа";
    }
  };
  return (
    <>
      <div className={stylesOrderPage.blockActions}>
        <div className={stylesOrderPage.line} />
        <div className={stylesOrderPage.actions}>
          <span>Заказ номер {id}</span>
        </div>
        <div className={stylesOrderPage.line} />
      </div>
      <div className={stylesOrderPage.blockAction}>
        <div className={stylesConfirmOrder.confirmOrder}>
          <div className={stylesConfirmOrder.confirmOrderName}>
            {convertOrderName()}
          </div>
          <ResultOrder
            model={carId}
            dateStart={new Date(dateFrom).toISOString()}
            fullTank={isFullTank}
            rightHandDrive={isRightWheel}
            babyChair={isNeedChildChair}
          />
        </div>
        <div className={stylesOrderPage.verticalLine} />
        <Check
          stateCheck={stateCheck}
          numberBlock={numberBlock}
          currentBlock={currentBlock}
        />
        <div onClick={changeStateCheck}>
          <img
            src={nextIcon}
            className={cn(
              stylesOrderPage.nextIcon,
              cx({ nextIconActive: stateCheck })
            )}
          />
        </div>
      </div>
    </>
  );
};

export default ConfirmOrder;
