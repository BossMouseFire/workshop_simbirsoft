import React, {useEffect, useState} from 'react'
import {IResponseOrder} from "../../../types/api";
import stylesOrderPage from "../orderPage.module.scss"
import stylesConfirmOrder from "./confirmOrder.module.scss"
import {
    changeBabyChair,
    changeColorSelected, changeDate, changeFullTank,
    changeLease,
    changeModel,
    changePickUpPoint, changeRightHandDrive,
    changeTariff, changeTotalPrice
} from "../../../store/actionCreators/check";
import {IPoint} from "../../../types/points";
import {useDispatch} from "react-redux";
import Check from "../Check/check";
import ResultOrder from "../Result/resultOrder";
import nextIcon from "../next.svg";
import cn from "classnames";
import cnBind from "classnames/bind";

const cx = cnBind.bind(stylesOrderPage)
interface IOrder {
    data: IResponseOrder,
    numberBlock: number,
    currentBlock: number
}

const ConfirmOrder:React.FC<IOrder> = ({data, numberBlock, currentBlock}) => {
    const dispatch = useDispatch()
    const [stateCheck, setStateCheck] = useState<boolean>(false)
    useEffect(() => {
        const response = data.data
        const point = {
            id: response.pointId.id,
            address: response.pointId.address,
            name: response.pointId.name,
            coordinates: [0, 0],
            cityId: response.cityId
        } as IPoint
        dispatch(changePickUpPoint(response.cityId, point))
        dispatch(changeModel(response.carId))
        dispatch(changeColorSelected(response.color))
        dispatch(changeLease((response.dateTo - response.dateFrom) / 3600))
        dispatch(changeTariff(response.rateId))
        dispatch(changeTotalPrice(response.price))
        dispatch(changeFullTank(response.isFullTank))
        dispatch(changeBabyChair(response.isNeedChildChair))
        dispatch(changeRightHandDrive(response.isRightWheel))
        dispatch(changeDate(
            new Date(response.dateFrom).toISOString(),
            new Date(response.dateTo).toISOString())
        )
    }, [])

    const changeStateCheck = () => {
        setStateCheck(state => !state)
    }
    return (
        <>
            <div className={stylesOrderPage.blockActions}>
                <div className={stylesOrderPage.line}/>
                <div className={stylesOrderPage.actions}>
                    Заказ номер {data.data.id}
                </div>
                <div className={stylesOrderPage.line}/>
            </div>
            <div className={stylesOrderPage.blockAction}>
                <div className={stylesConfirmOrder.confirmOrder}>
                    <div className={stylesConfirmOrder.confirmOrderName}>Ваш заказ подтвержден</div>
                    <ResultOrder model={data.data.carId}
                                 dateStart={new Date(data.data.dateFrom).toISOString()}
                                 fullTank={data.data.isFullTank}
                                 rightHandDrive={data.data.isRightWheel}
                                 babyChair={data.data.isNeedChildChair}/>
                </div>
                <div className={stylesOrderPage.verticalLine}/>
                <Check
                    stateCheck={stateCheck}
                    numberBlock={numberBlock}
                    currentBlock={currentBlock}
                />
                <div onClick={changeStateCheck}>
                    <img
                        src={nextIcon}
                        className={
                            cn(stylesOrderPage.nextIcon,
                                cx({nextIconActive: stateCheck}))
                        }
                    />
                </div>
            </div>
        </>
    )
}

export default ConfirmOrder