import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { createSelector } from '@reduxjs/toolkit';
import { Helmet } from "react-helmet";

import { fetchPizzas } from './pizzasSlice';
import { addPizza } from './buscetSlice';

import Categories from "../components/categories/Categories";
import PizzaBlock from "../components/pizzaBlock/PizzaBlock";
import SortPopup from "../components/sortPopup/SortPopup";
import Header from '../components/header/Header'
import Spinner from '../components/spinner/Spinner';

import './home.scss';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const sortItems = [
    { name: 'популярности', type: 'popular'},
    { name: 'цене', type: 'price'},
    { name: 'алфавит', type: 'name'},
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
    
    let filteredPizzas = useSelector(filteredPizzasSelector);
    const pizzasLoadingStatus = useSelector(state => state.pizzas.pizzasLoadingStatus);
    const {totalPrice, totalCount, order} = useSelector(state => state.buscet);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPizzas())
        // eslint-disable-next-line
    }, []);

    const onAddPizza = (pizza) => {
        dispatch(addPizza(pizza))
    }
    
    return (
        <>
            <Helmet>
                <meta name="description" content="Home"/>
                <title>Pizza</title>
            </Helmet>
            <Header show={true} totalPrice={totalPrice} totalCount={totalCount}/>
                <div className="container">
                <div className="content__top">
                    <Categories categoryNames={categoryNames}/>
                    <SortPopup sortItems={sortItems} />
                </div>
                <div className="content__title">Все пиццы</div>
                {pizzasLoadingStatus === 'loading' ? <Spinner/> : 
                                                    <div className='pizza'>
                                                        {filteredPizzas.map(pizza => <PizzaBlock 
                                                                                        key={pizza.id}
                                                                                        pizza={pizza}
                                                                                        order={order}
                                                                                        onAddPizza={onAddPizza}
                                                                                     />)}
                                                    </div>}                        
            </div>
        </>
        
    )
}

export default Home;