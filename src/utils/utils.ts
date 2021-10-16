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
