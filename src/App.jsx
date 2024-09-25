import './App.css'
import CookingPart from './components/CookingPart/CookingPart'
import Header from './components/Header/Header'
import Recipes from './components/Recipes/Recipes'

function App() {

  return (
    <div className='py-10 md:max-w-7xl max-w-md mx-auto'>
      <header>
      <Header></Header>
      </header>
      <main>
        <div className='text-center md:px-80 px-8'>
          <h1 className='text-4xl mb-6'>Our Recipes</h1>
          <p>
          Our recipes bring together a fusion of flavors, combining fresh ingredients with easy-to-follow steps, allowing you to create delicious, restaurant-quality dishes right in your own kitchen. Savor every bite!</p>
        </div>
        <Recipes></Recipes>
        <CookingPart></CookingPart>
      </main>
    </div>
  )
}

export default App
