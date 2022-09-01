import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { clearBuscet, deletePizza, plusOnePizza, minusOnePizza } from "./buscetSlice";

import Header from '../components/header/Header'
import BuscetItem from '../components/buscetItem/BuscetItem';

import blackBuscet from '../components/assets/blackbuscet.svg';
import trash from '../components/assets/trash.svg';
import smile from '../components/assets/smile.png';
import empty from '../components/assets/empty.png';

import './buscet.scss';

const Buscet = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    const {order, totalPrice, totalCount} = useSelector(state => state.buscet);

    const dispatch = useDispatch();

    const onClearBuscet = () => {
        if (window.confirm('Вы действительно хотите очистить корзину?')) {
            dispatch(clearBuscet());
        }
    }

    const onDelete = (id) => {
        if (window.confirm('Вы действительно хотите удалить?')) {
            dispatch(deletePizza(id));
        }
    }

    const handlePlusPizza = (id) => {
        dispatch(plusOnePizza(id))
    }

    const handleMinusPizza = (id) => {
        dispatch(minusOnePizza(id))
    }

    const emptyBuscet = () => (
        <div className="buscet__empty">
            <div className="buscet__empty-title">
                <div className="buscet__empty-title-text">Корзина пустая </div>
                <img src={smile} alt='smile' className="buscet__empty-title-img"/>
            </div>
            <div className="buscet__empty-descr">
                Вероятней всего, вы не заказывали ещё пиццу.
                Для того, чтобы заказать пиццу, перейди на главную страницу.
            </div>
            <img src={empty} alt='img empty buscet' className="buscet__empty-img"/>
            <div onClick={goBack} className="buscet__empty-btn">Вернуться назад</div>
        </div>
    )

    const elements = () => {
        return (
            <>
                <div className="buscet__top">
                    <div className="buscet__top-left">
                        <img src={blackBuscet} alt='buscet' className='buscet__top-left-img'/>
                        <div className="buscet__top-left-title">Корзина</div>
                    </div>
                    <div className="buscet__top-right">
                        <img src={trash} alt='trash' className='buscet__top-right-img'/>
                        <div onClick={onClearBuscet} className="buscet__top-right-descr">Очистить корзину</div>
                    </div>
                </div>
                <div className="buscet__middle">
                    {order.map(item => (
                        <BuscetItem 
                            key={item.id}
                            id={item.id}
                            name={item.name}
                            imageUrl={item.imageUrl}
                            type={item.type}
                            size={item.size}
                            totalSum={item.totalSum}
                            count={item.count}
                            onPlus={handlePlusPizza}
                            onMinus={handleMinusPizza}
                            onDelete={onDelete}
                        />
                    ))}
                </div>
                <div className="buscet__bottom">
                    <div className="buscet__bottom-order">
                        <div className="buscet__bottom-order-count">
                            Всего пицц: <span>{totalCount} шт.</span>
                        </div>
                        <div className="buscet__bottom-order-sum">
                            Сумма заказа: <span>{totalPrice} грн</span>
                        </div>
                    </div>
                    <div className="buscet__bottom-btns">
                        <div onClick={goBack} className="buscet__bottom-btns-left">
                        <svg
                            width="8"
                            height="14"
                            viewBox="0 0 8 14"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7 13L1 6.93015L6.86175 1"
                                stroke="#D3D3D3"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                            <span>Вернуться назад</span>
                        </div>
                        <div className="buscet__bottom-btns-right">Оплатить сейчас</div>
                    </div>
                </div>
            </>
        )
    }

    return (
        <>
            <Header show={false}/>
            <div className="buscet">
                {totalCount !== 0 ? elements() : emptyBuscet()}
            </div>
        </>
    )
}

export default Buscet;