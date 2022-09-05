import { useSelector, useDispatch } from 'react-redux';
import { activeFilterChanged } from '../../pages/pizzasSlice';
import PropTypes from 'prop-types';

import './categories.scss';

const Categories = ({categoryNames}) => {

    const activeCategory = useSelector(state => state.pizzas.activeFilter);
    const dispatch = useDispatch();
    
    return (
        <div className='categories'>
            <ul>
                <li
                    onClick={() => dispatch(activeFilterChanged('Все'))}
                    className={activeCategory === 'Все' ? 'activeCategory' : ''}
                    >
                    Все
                </li>
                {categoryNames &&
                categoryNames.map((name, index) => (
                    <li
                    onClick={() => dispatch(activeFilterChanged(name))}
                    className={activeCategory === name ? 'activeCategory' : ''}
                    key={`${name}_${index}`}>
                    {name}
                    </li>
                ))}
            </ul>
        </div>
    )
}

Categories.propTypes = {
    categoryNames: PropTypes.array.isRequired
};

export default Categories;