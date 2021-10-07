import React, {useEffect} from 'react'
import styles from "./model.module.scss"
import {useTypeSelector} from "../../../hooks/useTypeSelector";
import {useDispatch} from "react-redux";
import {fetchCategories} from "../../../store/actionCreators/categories";
const Model:React.FC = () => {
    const {categories} = useTypeSelector(state => state.categories)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCategories())
    }, [])
    return(
        <div className={styles.model}>
            <div className={styles.categories}>
                <div>
                    <input type={"radio"}/>
                    <span>Все модели</span>
                </div>
                {categories.map(category =>
                        <div>
                            <input type={"radio"}/>
                            <span>{category.name}</span>
                        </div>
                )}
            </div>
        </div>
    )
}

export default Model