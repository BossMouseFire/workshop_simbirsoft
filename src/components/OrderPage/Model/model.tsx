import React, {useEffect, useState} from 'react'
import styles from "./model.module.scss"
import {useTypeSelector} from "../../../hooks/useTypeSelector";
import {useDispatch} from "react-redux";
import {fetchCategories} from "../../../store/actionCreators/categories";
import {fetchCars, fetchCarsToCategory} from "../../../store/actionCreators/cars";
import CarCard from "./carCard";
import {changeIdCategory} from "../../../store/actionCreators/model";
const Model:React.FC = () => {
    const {categories} = useTypeSelector(state => state.categories)
    const {cars, loading} = useTypeSelector(state => state.cars)
    const {idCategory} = useTypeSelector(state => state.model)

    const dispatch = useDispatch()
    useEffect(() => {
        if(idCategory) {
            dispatch(changeIdCategory(idCategory))
            dispatch(fetchCarsToCategory(idCategory))
        }else{
            dispatch(fetchCategories())
            dispatch(fetchCars())
        }
    }, [])

    const onChangeCategory = (id: string) => {
        dispatch(changeIdCategory(id))
        if(!id){
            dispatch(fetchCars())
        }else{
            dispatch(fetchCarsToCategory(id))
        }
    }
    return(
        <div className={styles.model}>
            <div className={styles.categories}>
                <div>
                    <input
                        type={"radio"}
                        checked={!idCategory}
                        onChange={() => onChangeCategory("")}
                    />
                    <span>Все модели</span>
                </div>
                {categories.map(category =>
                        <div>
                            <input
                                type={"radio"}
                                checked={idCategory === category.id}
                                onChange={() => onChangeCategory(category.id)}
                            />
                            <span>{category.name}</span>
                        </div>
                )}
            </div>
            <div className={styles.carsBlock}>
                {
                    loading && <div className={styles.loader}/>
                }
                {
                    !loading && !cars.length
                        ?
                        <div className={styles.carNull}>Ничего не найдено</div>
                        :
                        cars.map(car =>
                            <CarCard car={car}/>
                        )
                }
            </div>
        </div>
    )
}

export default Model