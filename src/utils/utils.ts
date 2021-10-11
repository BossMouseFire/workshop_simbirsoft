
export const convertUrlImg = (path: string) => {
    if (path.indexOf("file") !== -1){
        return `https://api-factory.simbirsoft1.com${path}`
    }
    return path
}