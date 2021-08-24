import axios from 'axios'
import { useEffect, useState, } from 'react'
import { drinkURL, config } from '../sources'
import './Suggestion.css'
import { useHistory } from 'react-router-dom'

function Suggestion(props) {
  const [name, setName] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [step, setStep] = useState('')
  const [image, setImage] = useState('')
  const [url, setUrl] = useState('')

  const history = useHistory()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const newDrink = {
      name,
      ingredients,
      step,
      image,
      url
    }
    await axios.post(drinkURL, { fields: newDrink }, config)
    props.setToggleFetch(sug => !sug)
    history.push('./drinks')
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="input">
        <label className='drinkLabel' htmlFor='name'>Name: </label>
        <input required id='name' type='text' onChange={(e) => setName(e.target.value)} value={name} /><br />
        <label className='drinkLabel' htmlFor='ingredients'>Ingredients: </label>
        <textarea required id='ingredients' type='text' onChange={(e) => setIngredients(e.target.value)} value={ingredients} /><br />
        <label className='drinkLabel' htmlFor='step'>Steps: </label>
        <textarea required id='step' type='text' onChange={(e) => setStep(e.target.value)} value={step} /><br />
        <label className='drinkLabel' htmlFor='image'>Image Address: </label>
        <input id='image' type='text' onChange={(e) => setImage(e.target.value)} value={image} /><br />
        <label className='drinkLabel' htmlFor='url'>URL: </label>
        <input id='url' type='text' onChange={(e) => setUrl(e.target.value)} value={url} />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default Suggestion