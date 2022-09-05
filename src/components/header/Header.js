import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

import pizza from '../assets/pizza.png';
import buscet from '../assets/buscet.svg';

import "./header.scss";

const Header = ({show, totalPrice, totalCount}) => {
    return (
        <>
            <div className="header">
                <Link to={'/'} className="header__left">
                    <img className="header__left-img" src={pizza} alt="pizza"/>
                    <div className="header__left-wrapper">
                        <div className="header__left-title">
                            REACT PIZZA
                        </div>
                        <div className="header__left-descr">
                            самая вкусная пицца во вселенной
                        </div>
                    </div>
                </Link>
                {show && <Link to={'/buscet'} className="header__right">
                    <div className="header__right-sum">
                        {totalPrice} грн
                    </div>
                    <div className="header__right-divider">
                        |
                    </div>
                    <div className="header__right-wrapper">
                        <img className="header__right-img" src={buscet} alt='bascet'/>
                        <div className="header__right-count">{totalCount}</div>
                    </div>                
                </Link>}
            </div>
            <div className="divider"></div>
        </>
    )
}

Header.propTypes = {
    show: PropTypes.bool.isRequired,
    totalPrice: PropTypes.number,
    totalCount: PropTypes.number,
};

export default Header;