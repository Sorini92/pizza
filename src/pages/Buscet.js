import { useNavigate } from "react-router-dom";

import Header from '../components/header/Header'

import blackBuscet from '../components/assets/blackbuscet.svg';
import trash from '../components/assets/trash.svg';
import pizzaImg from '../components/assets/piz.png';

import './buscet.scss';

const Buscet = () => {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    return (
        <>
            <Header show={false}/>
            <div className="buscet">
                <div className="buscet__top">
                    <div className="buscet__top-left">
                        <img src={blackBuscet} alt='buscet' className='buscet__top-left-img'/>
                        <div className="buscet__top-left-title">Корзина</div>
                    </div>
                    <div className="buscet__top-right">
                        <img src={trash} alt='trash' className='buscet__top-right-img'/>
                        <div className="buscet__top-right-descr">Очистить корзину</div>
                    </div>
                </div>
                <div className="buscet__middle">
                    <div className="buscet__middle-item">
                        <div className="buscet__middle-item-divider"></div>
                        <div className="buscet__middle-item-block">
                            
                            <div className="buscet__middle-item-block-pizza">
                                <img src={pizzaImg} alt="pizza" className="buscet__middle-item-block-pizza-img"/>
                                <div className=''>
                                    <div className="buscet__middle-item-block-pizza-title">
                                        Сырный цыпленок
                                    </div>
                                    <div className="buscet__middle-item-block-pizza-descr">
                                        тонкое тесто, 26 см.
                                    </div>
                                </div>
                            </div> 
                            <div className="buscet__middle-item-block-count">
                                <div className="buscet__middle-item-block-count-minus">-</div>
                                <div className="buscet__middle-item-block-count-number">2</div>
                                <div className="buscet__middle-item-block-count-plus">+</div>
                            </div>
                            <div className="buscet__middle-item-block-price">770 грн</div>
                            <div className="buscet__middle-item-block-delete">&times;</div>
                        </div>
                    </div>
                    <div className="buscet__middle-item">
                        <div className="buscet__middle-item-divider"></div>
                        <div className="buscet__middle-item-block">
                            
                            <div className="buscet__middle-item-block-pizza">
                                <img src={pizzaImg} alt="pizza" className="buscet__middle-item-block-pizza-img"/>
                                <div className=''>
                                    <div className="buscet__middle-item-block-pizza-title">
                                        Сырный цыпленок
                                    </div>
                                    <div className="buscet__middle-item-block-pizza-descr">
                                        тонкое тесто, 26 см.
                                    </div>
                                </div>
                            </div> 
                            <div className="buscet__middle-item-block-count">
                                <div className="buscet__middle-item-block-count-minus">-</div>
                                <div className="buscet__middle-item-block-count-number">2</div>
                                <div className="buscet__middle-item-block-count-plus">+</div>
                            </div>
                            <div className="buscet__middle-item-block-price">770 грн</div>
                            <div className="buscet__middle-item-block-delete">&times;</div>
                        </div>
                    </div>
                    <div className="buscet__middle-item">
                        <div className="buscet__middle-item-divider"></div>
                        <div className="buscet__middle-item-block">
                            
                            <div className="buscet__middle-item-block-pizza">
                                <img src={pizzaImg} alt="pizza" className="buscet__middle-item-block-pizza-img"/>
                                <div className=''>
                                    <div className="buscet__middle-item-block-pizza-title">
                                        Сырный цыпленок
                                    </div>
                                    <div className="buscet__middle-item-block-pizza-descr">
                                        тонкое тесто, 26 см.
                                    </div>
                                </div>
                            </div> 
                            <div className="buscet__middle-item-block-count">
                                <div className="buscet__middle-item-block-count-minus">-</div>
                                <div className="buscet__middle-item-block-count-number">2</div>
                                <div className="buscet__middle-item-block-count-plus">+</div>
                            </div>
                            <div className="buscet__middle-item-block-price">770 грн</div>
                            <div className="buscet__middle-item-block-delete">&times;</div>
                        </div>
                    </div>
                    <div className="buscet__middle-item">
                        <div className="buscet__middle-item-divider"></div>
                        <div className="buscet__middle-item-block">
                            
                            <div className="buscet__middle-item-block-pizza">
                                <img src={pizzaImg} alt="pizza" className="buscet__middle-item-block-pizza-img"/>
                                <div className=''>
                                    <div className="buscet__middle-item-block-pizza-title">
                                        Сырный цыпленок
                                    </div>
                                    <div className="buscet__middle-item-block-pizza-descr">
                                        тонкое тесто, 26 см.
                                    </div>
                                </div>
                            </div> 
                            <div className="buscet__middle-item-block-count">
                                <div className="buscet__middle-item-block-count-minus">-</div>
                                <div className="buscet__middle-item-block-count-number">2</div>
                                <div className="buscet__middle-item-block-count-plus">+</div>
                            </div>
                            <div className="buscet__middle-item-block-price">770 грн</div>
                            <div className="buscet__middle-item-block-delete">&times;</div>
                        </div>
                    </div>
                </div>
                <div className="buscet__bottom">
                    <div className="buscet__bottom-order">
                        <div className="buscet__bottom-order-count">
                            Всего пицц: <span>3 шт.</span>
                        </div>
                        <div className="buscet__bottom-order-sum">
                            Сумма заказа: <span>900 грн</span>
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
            </div>
        </>
    )
}

export default Buscet;