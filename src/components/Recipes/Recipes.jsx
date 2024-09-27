import PropTypes from "prop-types";
import Recipe from "../Recipe/Recipe";
const Recipes = ({recipes, handleWantToCookBtn}) => {
    // console.log(handleWantToCookBtn)
    return (
        <div className="md:w-2/3 md:grid md:grid-cols-2 gap-5">
            {
                recipes.map((recipe,idx) => <Recipe handleWantToCookBtn={handleWantToCookBtn} key={idx} recipe={recipe}></Recipe>)
            }
        </div>
    );
};

Recipes.propTypes = {
    recipes: PropTypes.array.isRequired,
    handleWantToCookBtn: PropTypes.func
}
export default Recipes;