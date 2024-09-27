import PropTypes from 'prop-types';

const PreparingFood = ({food}) => {
    const { calories, recipe_name, preparing_time, recipe_id } = food;
    return (
        <tr className='bg-[#28282808] mb-2 rounded-xl'>
                <td>{recipe_id}</td>
                <td>{recipe_name}</td>
                <td>{preparing_time}</td>
                <td>{calories}</td>
            </tr>
    );
};

PreparingFood.propTypes = {
    food: PropTypes.object
};

export default PreparingFood;