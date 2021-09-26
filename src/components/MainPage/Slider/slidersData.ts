import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import image4 from "./images/image4.png"
import {ISlide} from '../type'

export const SliderData = <ISlide[]>[
    {
        head: "Бесплатная парковка",
        mainText: "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.",
        imageUrl: `url(${image1})`,
        url: "",
        backgroundButton: "linear-gradient(90deg, #13493F 0%, #0C7B1B 100%)"
    },
    {
        head: "Страховка",
        mainText: "Полная страховка автомобиля.",
        imageUrl: `url(${image2})`,
        url: "",
        backgroundButton: "linear-gradient(90deg, #132949 0%, #0C7B67 100%)"
    },
    {
        head: "Бензин",
        mainText: "Полный бак на любой заправке города за наш счёт.",
        imageUrl: `url(${image3})`,
        url: "",
        backgroundButton: "linear-gradient(90deg, #493013 0%, #7B0C3B 100%)"
    },
    {
        head: "Обслуживание",
        mainText: "Автомобиль проходит еженедельное ТО.",
        imageUrl: `url(${image4})`,
        url: "",
        backgroundButton: "linear-gradient(90deg, #281349 0%, #720C7B 100%)"
    },

]