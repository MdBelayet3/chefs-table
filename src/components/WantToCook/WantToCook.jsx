import PropTypes from 'prop-types';

const WantToCook = ({food, handlePreparingBtn}) => {
    // console.log(food);
    // console.log(handlePreparingBtn);
    const { calories, recipe_name, preparing_time, recipe_id } = food;
    return (
            <tr className='bg-[#28282808] mb-2 rounded-xl'>
                <td>{recipe_id}</td>
                <td>{recipe_name}</td>
                <td>{preparing_time}</td>
                <td>{calories}</td>
                <td><button onClick={() => handlePreparingBtn(food)} className='bg-[#0BE58A] py-2 px-5 rounded-3xl hover:bg-blue-400 text-black' >Preparing</button></td>
            </tr>
    );
};

WantToCook.propTypes = {
    food: PropTypes.object.isRequired,
    handlePreparingBtn:PropTypes.func.isRequired
};

export default WantToCook;