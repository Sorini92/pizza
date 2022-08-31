import { useState } from 'react';
import classNames from 'classnames';

import './pizzaBlock.scss';

const PizzaBlock = ({pizza, onAddPizza}) => {
    const availableTypes = ['тонкое', 'традиционное'];
    const availableSizes = [26, 30, 40];

    const {id, name, price, imageUrl, types, sizes} = pizza;

    const [activeType, setActiveType] = useState(types[0]);
    const [activeSize, setActiveSize] = useState(0);

    const onAdd = () => {
        const obj = {
            id,
            name,
            price,
            imageUrl,
            type: availableTypes[activeType],
            size: availableSizes[activeSize],
            count: 1
        }
        onAddPizza(obj);
    }

    return (
        <div className='pizza__item'>
                <img src={imageUrl} alt='pizza' className='pizza__img '/>
                <div className='pizza__title'>{name}</div>
                <div className='pizza__setting'>
                    <div className='pizza__dough'>
                        {availableTypes.map((item, i) => (
                            <div 
                                onClick={() => setActiveType(i)}
                                key={item} 
                                className={classNames({
                                    activeSetting: activeType === i,
                                    disableSetting: !types.includes(i)
                                }, 'pizza__dough-item')}
                                >
                                {item}
                            </div>
                        ))}
                    </div>
                    <div className='pizza__size'>
                        {availableSizes.map((item, i) => (
                            <div 
                                onClick={() => setActiveSize(i)}
                                key={item} 
                                className={classNames({
                                    activeSetting: activeSize === i,
                                    disableSetting: !sizes.includes(item)
                                }, 'pizza__size-item')}
                                >
                                {item} см.
                            </div>
                        ))}
                    </div>
                </div>
                <div className='pizza__bottom'>
                    <div className='pizza__bottom-price'>от {price} грн</div>
                    <button onClick={onAdd} className='pizza__bottom-btn'>
                        <svg
                            width="12"
                            height="12"
                            viewBox="0 0 12 12"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                            d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                            fill="white"
                            />
                        </svg>
                        <span>Добавить</span>
                        {/* <div className='pizza__bottom-btn-count'>1</div> */}
                    </button>
                </div>
            </div>
    )
}

export default PizzaBlock;