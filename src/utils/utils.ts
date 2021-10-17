import {IBodyOrder} from "../types/api";

export const convertUrlImg = (path: string) => {
    if (path.indexOf("file") !== -1){
        return `https://api-factory.simbirsoft1.com${path}`
    }
    return path
}

export const isEmptyObject = (obj: Object) => {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
}

export const packageData = (data: IBodyOrder):FormData => {
    let form = new FormData()
    for(const key in data){
        if(data.hasOwnProperty(key)){
            // @ts-ignore
            form.append(key, data[key])
        }
    }
    return form
}

export const convertNumberModel = (numberModel: string) => {
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

export const convertDate = (date: string) => {
    const dateFormat = new Date(date)
    const day = dateFormat.getDate() > 9 ? `${dateFormat.getDate()}` : `0${dateFormat.getDate()}`
    const month = dateFormat.getMonth() + 1 > 9 ? `${dateFormat.getMonth() + 1}` : `0${dateFormat.getMonth() + 1}`
    const hours = dateFormat.getHours() > 9 ? `${dateFormat.getHours()}` : `0${dateFormat.getHours()}`
    const minutes = dateFormat.getMinutes() > 9 ? `${dateFormat.getMinutes()}` : `0${dateFormat.getMinutes()}`

    return `${day}.${month}.${dateFormat.getFullYear()} ${hours}:${minutes}`
}