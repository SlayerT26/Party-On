import axios from 'axios'
import './App.css';
import { drinkURL, foodURL, musicURL, config } from './sources'
import { Link, Route } from 'react-router-dom'
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar'
import Drinks from './components/Drink/Drinks'
import Paragraph from './components/Paragraph'
import DirectPage from './components/Drink/DirectPage'
import Suggestion from './components/Drink/Suggestion'
import Food from './components/Food/Food'
import DirectFoodPage from './components/Food/DirectFoodPage'
import FoodSuggestion from './components/Food/FoodSuggestion'
import Music from './components/Music/Music'
import DirectMusic from './components/Music/DirectMusic'
import MusicSuggestion from './components/Music/MusicSuggestion'
import Help from './components/Extra/Help'
import Help2 from './components/Extra/Help2'


function App() {

  const [drinks, setDrinks] = useState([])
  const [food, setFood] = useState([])
  const [music, setMusic] = useState([])
  const [toggleFetch, setToggleFetch] = useState(true)

  useEffect(() => {
    const fetchDrink = async () => {
      const drinkResp = await axios.get(drinkURL, config)
      setDrinks(drinkResp.data.records)
    }
    fetchDrink()
  }, [toggleFetch])

  useEffect(() => {
    const fetchFood = async () => {
      const foodResp = await axios.get(foodURL, config)
      setFood(foodResp.data.records)
    }
    fetchFood()
  }, [toggleFetch])

  useEffect(() => {
    const fetchMusic = async () => {
      const musicResp = await axios.get(musicURL, config)
      setMusic(musicResp.data.records)
    }
    fetchMusic()
  }, [toggleFetch])

  return (
    <>
      <div className="mainBackground">
        <Navbar />
        <Route path='/' exact>
          <Paragraph />
        </Route>
        <div className="DrinkTab">
          <Route path='/drinks' exact>
            <Link className="NewButton" to='/newDrink'>
              <button className="Button">New Party Drink</button>
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
          <Route path='/newDrink'>
            <Suggestion drinks={drinks} setToggleFetch={setToggleFetch} />
          </Route>
        </div>
        <div className='FoodTab'>
          <Route path='/food' exact>
            <Link className="NewButton" to='/newFood'>
              <button className="Button">New Party Dish</button>
            </Link>
            {food.map((food, index) => {
              return (
                <Food key={index} food={food} />
              )
            })}
          </Route>
          <Route exact path='/food/:id'>
            <DirectFoodPage food={food} setToggleFetch={setToggleFetch} />
          </Route>
          <Route exact path='/newFood'>
            <FoodSuggestion food={food} setToggleFetch={setToggleFetch} />
          </Route>
        </div>
        <div className="MusicTab">
          <Route path='/music' exact>
            <Link className="NewButton" to='/newMusic'>
              <button className="Button">New Party Song</button>
            </Link>
            {music.map((music, index) => {
              return (
                <Music key={index} music={music} />
              )
            })}
          </Route>
          <Route exact path='/music/:id'>
            <DirectMusic music={music} setToggleFetch={setToggleFetch} />
          </Route>
          <Route exact path='/newMusic'>
            <MusicSuggestion />
          </Route>
        </div>
        <div>
          <Route path='/help' exact>
            <Help />
          </Route>
          <Route path='/moreHelp' exact>
            <Help2 />
          </Route>
        </div>
      </div>
    </>
  );
}

export default App;
