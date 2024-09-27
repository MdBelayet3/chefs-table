import { useEffect, useState } from 'react'
import './App.css'
import CookingPart from './components/CookingPart/CookingPart'
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'

function App() {

  // useState and useEffect hooks for fetch data and load this 
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    fetch('chef.json')
      .then(res => res.json())
      .then(data => setRecipes(data));
  }, [])

  // useState and handler for handling want to cook button of Recipe.jsx component
  const [foods, setFoods] =useState([])
  
  const handleWantToCookBtn = recipe =>{
    // console.log('handle click btn ');
    // console.log(recipe);
    setFoods([...foods,recipe]);
  }

  // 
  const [preparingFood, setPreparingFood] = useState([]);

  const handlePreparingBtn = (food) =>{
    // console.log('btn click')
    // console.log(food);
    const remainingFoods = foods.filter(newFood => newFood.recipe_id !== food.recipe_id)
    console.log(remainingFoods);
    setFoods(remainingFoods);
    setPreparingFood([...preparingFood,food]);
  }

  return (
    <div className='py-10 md:max-w-7xl max-w-md mx-auto'>
      <header>
        <Header></Header>
      </header>
      <main>
        <div className='text-center md:px-80 px-8'>
          <h1 className='text-4xl mb-6'>Our Recipes</h1>
          <p className='mb-12'>
            Our recipes bring together a fusion of flavors, combining fresh ingredients with easy-to-follow steps, allowing you to create delicious, restaurant-quality dishes right in your own kitchen. Savor every bite!</p>
        </div>
        <div className='flex md:flex-row flex-col'>
          <Recipes handleWantToCookBtn={handleWantToCookBtn} recipes={recipes} ></Recipes>
          <CookingPart preparingFood={preparingFood} handlePreparingBtn={handlePreparingBtn} foods={foods} ></CookingPart>
        </div>
      </main>
    </div>
  )
}

export default App
