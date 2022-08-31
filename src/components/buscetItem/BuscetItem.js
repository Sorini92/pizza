import './buscetItem.scss';

const BuscetItem = ({id, imageUrl, name, type, size, price, count, onDelete}) => {
    return (
        <div key={id} className="buscet__middle-item">
            <div className="buscet__middle-item-divider"></div>
            <div className="buscet__middle-item-block">
                
                <div className="buscet__middle-item-block-pizza">
                    <img src={imageUrl} alt="pizza" className="buscet__middle-item-block-pizza-img"/>
                    <div className=''>
                        <div className="buscet__middle-item-block-pizza-title">
                            {name}
                        </div>
                        <div className="buscet__middle-item-block-pizza-descr">
                            {type}, {size} см.
                        </div>
                    </div>
                </div> 
                <div className="buscet__middle-item-block-count">
                    <div className="buscet__middle-item-block-count-minus">-</div>
                    <div className="buscet__middle-item-block-count-number">{count}</div>
                    <div className="buscet__middle-item-block-count-plus">+</div>
                </div>
                <div className="buscet__middle-item-block-price">{price} грн</div>
                <div onClick={() => onDelete(id)} className="buscet__middle-item-block-delete">&times;</div>
            </div>
        </div>
    )
}

export default BuscetItem;