import PropTypes from "prop-types";
import './CoolingPart.css'
import WantToCook from "../WantToCook/WantToCook";
import PreparingFood from "../PreparingFood/PreparingFood";

const CookingPart = ({ foods, handlePreparingBtn, preparingFood }) => {
    // console.log(foods)
    return (
        <div>
            <div className="shadow-md border-2 border-[#28282833] rounded-2xl ml-8 px-6 py-8 text-center">
                <h1 className="mb-4 text-2xl">Want to cook: {foods.length}</h1>
                <hr className="mb-6" />
                <table className="mb-10">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Times</td>
                            <td>Calories</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            foods.map((food, idx) => <WantToCook key={idx} handlePreparingBtn={handlePreparingBtn} food={food}></WantToCook>)
                        }
                    </tbody>
                </table>

                <h1 className="mb-4 text-2xl">Currently cooking: {preparingFood.length}</h1>
                <hr className="mb-6" />
                <table className="mb-10">
                    <thead>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                            <td>Times</td>
                            <td>Calories</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            preparingFood.map((food, idx) => <PreparingFood  key={idx} handlePreparingBtn={handlePreparingBtn} food={food}></PreparingFood>)
                        }
                    </tbody>
                </table>

            </div>
        </div>
    );
};

CookingPart.propTypes = {
    foods: PropTypes.array.isRequired,
    handlePreparingBtn: PropTypes.func.isRequired,
    preparingFood: PropTypes.array.isRequired,
}

export default CookingPart;