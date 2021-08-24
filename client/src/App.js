import axios from 'axios'
import './App.css';
import { getDrinkURL, drinkURL, foodURL, musicURL, config } from './sources'
import { Link, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar'
import Drinks from './components/Drink/Drinks'
import Paragraph from './components/Drink/Paragraph'
import DirectPage from './components/Drink/DirectPage'
import Suggestion from './components/Suggestion'

function App() {

  const [drinks, setDrinks] = useState([])
  const [toggleFetch, setToggleFetch] = useState(true)

  useEffect(() => {
    const fetchDrink = async () => {
      const drinkResp = await axios.get(drinkURL, config)
      setDrinks(drinkResp.data.records)
      console.log(drinkResp)
    }
    fetchDrink()
  }, [toggleFetch])

  console.log(drinks)

  return (
    <div className="mainBackground">
      <Navbar />
      <Route path='/' exact>
        <Paragraph />
      </Route>
      <Route path='/drinks' exact>
        <Link className="NewDrinkButton" to='/new'>
          <button >New Drink</button>
        </Link>
        {drinks.map((drink, index) => {
          return (
            <Drinks key={index} drink={drink} />
          )
        })}
      </Route>
      <Route exact path='/drinks/:id'>
        <DirectPage drink={drinks} setToggleFetch={setToggleFetch} />
      </Route>
      <Route path='/new'>
        <Suggestion drinks={drinks} setToggleFetch={setToggleFetch} />
      </Route>
    </div>
  );
}

export default App;
