import React from "react"
import styles from "./result.module.scss"
import {useTypeSelector} from "../../../hooks/useTypeSelector";
import {convertUrlImg} from "../../../utils/utils";

const Result:React.FC = () => {
    const {model, dateStart, fullTank,
        rightHandDrive, babyChair} = useTypeSelector(state => state.check)

    const convertNumberModel = (numberModel: string) => {
        let result = ""
        if (numberModel){
            numberModel = numberModel.toUpperCase()
            numberModel = numberModel.replaceAll(" ", "")
            for (let charIndex = 0; charIndex < numberModel.length; charIndex++){
                if(charIndex === 0){
                    result += `${numberModel[charIndex]} `
                } else if(charIndex === 3){
                    result += `${numberModel[charIndex]} `
                } else if (charIndex === 5){
                    result += `${numberModel[charIndex]} `
                } else{
                    result += numberModel[charIndex]
                }
            }
            result += "73"
        }else{
            result += "A 777 AAA 73"
        }
        return result
    }

    return(
        <div className={styles.result}>
            <div className={styles.content}>
                <div className={styles.information}>
                <span className={styles.nameModel}>
                    {model.name}
                </span>
                    <div className={styles.numberModel}>
                        {convertNumberModel(model.number)}
                    </div>
                    {
                        fullTank &&
                        <div className={styles.addInfo}>
                            <span>Топливо </span>
                            <span>100%</span>
                        </div>
                    }
                    {
                        babyChair &&
                        <div className={styles.addInfo}>
                            <span>Детское кресло - </span>
                            <span>Да</span>
                        </div>
                    }
                    {
                        rightHandDrive &&
                        <div className={styles.addInfo}>
                            <span>Правый руль - </span>
                            <span>Да</span>
                        </div>
                    }
                    <div className={styles.addInfo}>
                        <span>Доступна с </span>
                        <span>{dateStart}</span>
                    </div>
                </div>
                <div className={styles.imgBlock}>
                    <img src={convertUrlImg(model.thumbnail.path)}/>
                </div>
            </div>
        </div>
    )

}

export default Result