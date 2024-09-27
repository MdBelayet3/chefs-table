import PropTypes from 'prop-types';
import { FaRegClock } from "react-icons/fa";
import { AiOutlineFire } from "react-icons/ai";

const Recipe = ({ recipe, handleWantToCookBtn }) => {

    const { calories, recipe_image, recipe_name, short_description, preparing_time, ingredients } = recipe;

    return (
        <div className='p-6 shadow-md border-2 border-[#28282833] rounded-2xl flex flex-col gap-5 md:mb-0 mb-5 '>
            <img className='rounded-2xl h-[300px] w-full' src={recipe_image} alt={`image of ${recipe_name}`} />
            <h2 className='text-2xl'>{recipe_name}</h2>
            <h4 className='text-[#878787]'>{short_description}</h4>
            <hr />
            <div>
                <h3 className='text-2xl'>Ingredient : {ingredients.length}</h3>
                <ul className='text-[#878787]'>
                    {
                        ingredients.map((ingredient, idx) => <li key={idx}>{`(${idx + 1}) ${ingredient}`}</li>)
                    }
                </ul>
            </div>
            <div className='flex gap-5 text-[#878787]'>
                <div className='flex gap-2 items-center'>
                    <FaRegClock />
                    <p>{preparing_time} minutes</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <AiOutlineFire />
                    <p>{calories}</p>
                </div>
            </div>
            <div>
            <button onClick={() =>handleWantToCookBtn(recipe)} className='py-3 px-6 bg-[#0BE58A] hover:bg-lime-400 hover:text-lg rounded-3xl'>Want to Cook</button>
            </div>
        </div>
    );
};

Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleWantToCookBtn: PropTypes.func.isRequired,
};

export default Recipe;