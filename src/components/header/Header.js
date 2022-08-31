import { Link } from "react-router-dom";

import pizza from '../assets/pizza.png';
import buscet from '../assets/buscet.svg';

import "./header.scss";

const Header = ({show, order, totalPrice}) => {
    return (
        <>
            <div className="header">
                <div className="header__left">
                    <img className="header__left-img" src={pizza} alt="pizza"/>
                    <div className="header__left-wrapper">
                        <div className="header__left-title">
                            REACT PIZZA
                        </div>
                        <div className="header__left-descr">
                            самая вкусная пицца во вселенной
                        </div>
                    </div>
                </div>
                {show && <Link to={'/buscet'} className="header__right">
                    <div className="header__right-sum">
                        {totalPrice} грн
                    </div>
                    <div className="header__right-divider">
                        |
                    </div>
                    <div className="header__right-wrapper">
                        <img className="header__right-img" src={buscet} alt='bascet'/>
                        <div className="header__right-count">{order.length}</div>
                    </div>                
                </Link>}
            </div>
            <div className="divider"></div>
        </>
    )
}

export default Header;