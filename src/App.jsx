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
        <div className='flex'>
          <Recipes recipes={recipes} ></Recipes>
          <CookingPart></CookingPart>
        </div>
      </main>
    </div>
  )
}

export default App
