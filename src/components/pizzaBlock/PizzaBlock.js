import Spinner from '../spinner/Spinner';

import './pizzaBlock.scss';

const PizzaBlock = ({pizzasLoadingStatus, pizzas}) => {
    const availableTypes = ['тонкое', 'традиционное'];
    const availableSizes = [26, 30, 40];

    if (pizzasLoadingStatus === "loading") {
        return <Spinner/>;
    } else if (pizzasLoadingStatus === "error") {
        return <h5 className="text-center mt-5">Ошибка загрузки</h5>
    }
    
    const renderItems = (arr) => {
        const list = arr.map((item, i) => {
            return (
                <div key={i} className='pizza__item'>
                    <img src={item.imageUrl} alt='pizza' className='pizza__img '/>
                    <div className='pizza__title'>{item.name}</div>
                    <div className='pizza__setting'>
                        <div className='pizza__dough'>
                            {availableTypes && 
                            availableTypes.map(item => <div key={item} className='pizza__dough-item'>{item}</div>)}
                        </div>
                        <div className='pizza__size'>
                            {availableSizes && 
                            availableSizes.map(item => <div key={item} className='pizza__size-item'>{item} см.</div>)}
                        </div>
                    </div>
                    <div className='pizza__bottom'>
                        <div className='pizza__bottom-price'>от {item.price} грн</div>
                        <button className='pizza__bottom-btn'>
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
                        </button>
                    </div>
                </div>
            )
        })
        return (
            <>
                {list}
            </>
        )
    }

    const elements = renderItems(pizzas);

    return (
        <div className='pizza'>
            {elements}
        </div>
    )
}

export default PizzaBlock;