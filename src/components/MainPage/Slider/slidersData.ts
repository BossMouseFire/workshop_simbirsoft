import image1 from "./images/image1.png"
import image2 from "./images/image2.png"
import image3 from "./images/image3.png"
import image4 from "./images/image4.png"
import {ISlide} from '../type'

export const SliderData = <ISlide[]>[
    {
        head: "Бесплатный парковка",
        mainText: "Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.",
        imageUrl: `url(${image1})`,
        url: ""
    },
    {
        head: "Страховка",
        mainText: "Полная страховка страховка автомобиля.",
        imageUrl: `url(${image2})`,
        url: ""
    },
    {
        head: "Бензин",
        mainText: "Полный бак на любой заправке города за наш счёт.",
        imageUrl: `url(${image3})`,
        url: ""
    },
    {
        head: "Обслуживание",
        mainText: "Автомобиль проходит еженедельное ТО.",
        imageUrl: `url(${image4})`,
        url: ""
    },

]