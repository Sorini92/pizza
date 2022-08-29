import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchPizzas } from './pizzasSlice';
import { createSelector } from '@reduxjs/toolkit';

import Categories from "../components/categories/Categories";
import PizzaBlock from "../components/pizzaBlock/PizzaBlock";
import SortPopup from "../components/sortPopup/SortPopup";
import Header from '../components/header/Header'

import './home.scss';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
    { name: 'популярности', type: 'popular', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'алфавит', type: 'name', order: 'asc' },
];

const Home = () => {

    const filteredPizzasSelector = createSelector(
        (state) => state.pizzas.activeFilter,
        (state) => state.pizzas.pizzas,
        (filter, pizzas) => {
            if (filter === 'Все') {
                return pizzas;
            } else {
                return pizzas.filter(item => categoryNames[item.category] === filter);
            }
        }
    );

    const filteredPizzas = useSelector(filteredPizzasSelector);
    const pizzasLoadingStatus = useSelector(state => state.pizzas.pizzasLoadingStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPizzas())
        // eslint-disable-next-line
    }, []);

    return (
        <>
            <Header show={true}/>
                <div className="container">
                <div className="content__top">
                    <Categories categoryNames={categoryNames}/>
                    <SortPopup sortItems={sortItems}/>
                </div>
                <div className="content__title">Все пиццы</div>
                <PizzaBlock pizzas={filteredPizzas} pizzasLoadingStatus={pizzasLoadingStatus}/>
            </div>
        </>
        
    )
}

export default Home;