import { FaSearch } from "react-icons/fa";
import image from "../../assets/handsome-bearded-guy-posing-against-white-wall.jpg"

const Header = () => {
    return (
        <div>
            {/* navbar section */}
            <div className="flex items-center justify-between">
                <h1 className="text-3xl">Recipe Calories</h1>
                <div className="flex gap-12">
                    <a href="">Home</a>
                    <a href="">Recipes</a>
                    <a href="">About</a>
                    <a href="">Search</a>
                </div>
                <div className="flex items-center gap-4">
                    <div className="flex relative">
                        <button className="hover:text-xl"><FaSearch className="absolute top-3 left-4" /></button>
                        <input placeholder="search" className="bg-[#150B2B0D] rounded-[50px] pl-10 h-9" type="text" />
                    </div>
                    <img className="w-20 rounded-full" src={image} alt="" />
                </div>
            </div>

            {/* Banner section */}
            
            <div className="bg-[url('https://i.ibb.co.com/NN3MQQC/Rectangle-1.jpg')]  bg-cover text-white md:py-32 py-4 md:px-60 px-6 text-center my-12 rounded-2xl ">
                <h1 className="md:text-5xl text-2xl">Discover an exceptional cooking class tailored for you!</h1>
                <p className="my-6">Experience a unique cooking class designed just for you, where you’ll learn culinary techniques, explore diverse cuisines, and unleash your creativity in the kitchen!</p>
                <button className="bg-[#0BE58A] p-4 rounded-[50px] mr-7 text-black md:text-2xl ">Explore Now</button>
                <button className="p-4 rounded-[50px] border-2 border-white md:text-2xl ">Our Feedback</button>
            </div>
        </div>
    );
};

export default Header;