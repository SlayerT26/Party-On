import axios from 'axios'
import './App.css';
import { drinkURL, foodURL, musicURL, config } from './sources'
import { Link, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar'
import Drinks from './components/Drinks'
import Paragraph from './components/Paragraph'
import DirectPage from './components/DirectPage'

function App() {

  const [drinks, setDrinks] = useState([])

  useEffect(() => {
    const fetchDrink = async () => {
      const drinkResp = await axios.get(drinkURL, config)
      setDrinks(drinkResp.data.records)
    }
    fetchDrink()
  }, [])



  return (
    <div className="mainBackground">
      <Navbar />
      <Route path='/' exact>
        <Paragraph />
      </Route>
      <Route path='/drinks' exact>
        {drinks.map((drink, index) => {
          return (
            <Drinks key={index} drink={drink} />
          )
        })}
      </Route>
      <Route path='/direct'>
        <DirectPage />
      </Route>
    </div>
  );
}

export default App;
