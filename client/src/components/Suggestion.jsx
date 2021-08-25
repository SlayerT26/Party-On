import axios from 'axios'
import { useEffect, useState, } from 'react'
import { drinkURL, config } from '../sources'
import './Suggestion.css'
import { useHistory } from 'react-router-dom'

function Suggestion(props) {
  const [name, setName] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [steps, setSteps] = useState('')
  const [image, setImage] = useState('')
  const [direct, setDirect] = useState('')

  const history = useHistory()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const newDrink = {
      name,
      ingredients,
      steps,
      image,
      direct,
    }
    await axios.post(drinkURL, { fields: newDrink }, config)
    props.setToggleFetch((sug) => !sug)
    history.push('/drinks')
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="input">
        <label className='drinkLabel' htmlFor='name'>Name: </label>
        <input required id='name' type='text' onChange={(e) => setName(e.target.value)} value={name} /><br />
        <label className='drinkLabel' htmlFor='ingredients'>Ingredients: </label>
        <textarea required id='ingredients' type='text' onChange={(e) => setIngredients(e.target.value)} value={ingredients} /><br />
        <label className='drinkLabel' htmlFor='step'>Steps: </label>
        <textarea required id='step' type='text' onChange={(e) => setSteps(e.target.value)} value={steps} /><br />
        <label className='drinkLabel' htmlFor='image'>Image Address: </label>
        <input id='image' type='url' onChange={(e) => setImage(e.target.value)} value={image} /><br />
        <label className='drinkLabel' htmlFor='url'>URL: </label>
        <input id='direct' type='url' onChange={(e) => setDirect(e.target.value)} value={direct} />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default Suggestion