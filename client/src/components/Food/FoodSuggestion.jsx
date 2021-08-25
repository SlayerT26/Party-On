import axios from 'axios'
import { useState, } from 'react'
import { foodURL, config } from '../../sources'
import './FoodSuggestion.css'
import { useHistory } from 'react-router-dom'

function FoodSuggestion(props) {

  const [name, setName] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [instruction, setInstruction] = useState('')
  const [image, setImage] = useState('')
  const [direct, setDirect] = useState('')
  const [description, setDescription] = useState('')

  const history = useHistory()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const newDish = {
      name,
      description,
      ingredients,
      instruction,
      image,
      direct,
    }
    await axios.post(foodURL, { fields: newDish }, config)
    props.setToggleFetch((sug) => !sug)
    history.push('/food')
  }

  return (
    <>
      <h1 className="NewFoodHeading">New Party Dish</h1>
      <form onSubmit={handleSubmit} className="inputFood">
        <label className='foodLabel' htmlFor='name'>Name: </label>
        <input className='foodInput' required id='name' type='text' onChange={(e) => setName(e.target.value)} value={name} /><br />
        <label className='foodLabel' htmlFor='description'>Description: </label>
        <textarea className='foodTextInput' required id='description' type='text' onChange={(e) => setDescription(e.target.value)} value={description} /><br />
        <label className='foodLabel' htmlFor='ingredients'>Ingredients: </label>
        <textarea className='foodTextInput' required id='ingredients' type='text' onChange={(e) => setIngredients(e.target.value)} value={ingredients} /><br />
        <label className='foodLabel' htmlFor='instruction'>Instruction: </label>
        <textarea className='foodTextInput' required id='step' type='text' onChange={(e) => setInstruction(e.target.value)} value={instruction} /><br />
        <label className='foodLabel' htmlFor='image'>Image Address: </label>
        <input className='foodInput' id='image' type='url' onChange={(e) => setImage(e.target.value)} value={image} /><br />
        <label className='foodLabel' htmlFor='url'>URL: </label>
        <input className='foodInput' id='direct' type='url' onChange={(e) => setDirect(e.target.value)} value={direct} />
        <br />
        <button className='submitFoodButton' type='submit'>Submit</button>
      </form>
      <div className="extra">
      </div>
    </>
  )
}

export default FoodSuggestion