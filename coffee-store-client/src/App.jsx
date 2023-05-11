
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';

function App() {
  const coffees = useLoaderData();

  return (
    <div className='m-20 '>
      
      <h1 className='text-6xl text-center text-violet-600 my-20'>Hot Hot Cold Coffee : {coffees.length}</h1>
      <div className='grid grid-cols-2 gap-3 '>
      {
        coffees.map(coffee=> <CoffeeCard
        key={coffee._id}
        coffee = {coffee}
          >
        </CoffeeCard>)
      }
      </div>
    </div>
  )
}

export default App
