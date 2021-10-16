import React, {Dispatch, SetStateAction} from 'react'
import cn from "classnames";
import styles from "./orderPage.module.scss";
import cnBind from "classnames/bind";
import {useTypeSelector} from "../../hooks/useTypeSelector";
import {postOrder} from "../../api/api";
import {IBodyOrder} from "../../types/api";
const cx = cnBind.bind(styles)

interface IConfirmModal {
    stateConfirmModal: boolean,
    setStateConfirmModal: Dispatch<SetStateAction<boolean>>
}

const ConfirmModal:React.FC<IConfirmModal> = ({stateConfirmModal, setStateConfirmModal}) => {
    const {
        city, pickUpPoint, model, colorSelected,
        tariff, priceTotal, dateStart, dateEnd,
        rightHandDrive, babyChair, fullTank } = useTypeSelector(state => state.check)

    const sendOrder = () => {
        const dateStartFormatted = new Date(dateStart)
        const dateEndFormatted = new Date(dateEnd)
        const body = {
            orderStatusId: "5e26a191099b810b946c5d89",
            cityId: city.id,
            pointId: pickUpPoint.id,
            carId: model.id,
            color: colorSelected,
            dateFrom: dateStartFormatted.getTime(),
            dateTo: dateEndFormatted.getTime(),
            rateId: tariff.id,
            price: priceTotal,
            isFullTank: fullTank,
            isNeedChildChair: babyChair,
            isRightWheel: rightHandDrive
        } as IBodyOrder
        postOrder(body)
            .then(response =>
                console.log(response.data.data)
            )
            .catch(error => console.log(error))
    }

    return (
        <div className={cn(styles.confirmModal, cx({modalActive: stateConfirmModal}))}>
            <div className={styles.form}>
                <span>Подтвердить заказ</span>
                <div className={styles.buttonsAction}>
                    <div className={styles.confirmButton} onClick={sendOrder}>
                        Подтвердить
                    </div>
                    <div className={styles.backButton} onClick={() => setStateConfirmModal(false)}>
                        Вернуться
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ConfirmModal