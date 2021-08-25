import axios from 'axios'
import { useState, } from 'react'
import { drinkURL, config } from '../../sources'
import './Suggestion.css'
import { useHistory } from 'react-router-dom'

function Suggestion(props) {
  const [name, setName] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [steps, setSteps] = useState('')
  const [image, setImage] = useState('')
  const [direct, setDirect] = useState('')
  const [description, setDescription] = useState('')

  const history = useHistory()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const newDrink = {
      name,
      description,
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
      <h1 className="NewDrinkHeading">New Party Drink</h1>
      <form onSubmit={handleSubmit} className="input">
        <label className='drinkLabel' htmlFor='name'>Name: </label>
        <input className='drinkInput' required id='name' type='text' onChange={(e) => setName(e.target.value)} value={name} /><br />
        <label className='drinkLabel' htmlFor='description'>Description: </label>
        <textarea className='drinkTextInput' required id='description' type='text' onChange={(e) => setDescription(e.target.value)} value={description} /><br />
        <label className='drinkLabel' htmlFor='ingredients'>Ingredients: </label>
        <textarea className='drinkTextInput' required id='ingredients' type='text' onChange={(e) => setIngredients(e.target.value)} value={ingredients} /><br />
        <label className='drinkLabel' htmlFor='step'>Steps: </label>
        <textarea className='drinkTextInput' required id='step' type='text' onChange={(e) => setSteps(e.target.value)} value={steps} /><br />
        <label className='drinkLabel' htmlFor='image'>Image Address: </label>
        <input className='drinkInput' id='image' type='url' onChange={(e) => setImage(e.target.value)} value={image} /><br />
        <label className='drinkLabel' htmlFor='url'>URL: </label>
        <input className='drinkInput' id='direct' type='url' onChange={(e) => setDirect(e.target.value)} value={direct} />
        <br />
        <button className='submitButton' type='submit'>Submit</button>
      </form>
      <div className="extra">
      </div>
    </>
  )
}

export default Suggestion