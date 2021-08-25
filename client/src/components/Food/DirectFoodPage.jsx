import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import { config, foodURL } from '../../sources'
import './DirectFoodPage.css'

function DirectFoodPage(props) {

  const params = useParams()
  const history = useHistory()
  const handleDelete = async (id) => {
    await axios.delete(`${foodURL}/${id}`, config)
    props.setToggleFetch((curr) => !curr)
    history.push('/food')
  }
  return (
    <>
      {props.food.filter((food) => params.id === food.id).map((food) => (
        <section className='foodSpecific'>
          <div>
            <img className="foodSpecificImage" src={food.fields.image ? food.fields.image : 'http://cdn.shopify.com/s/files/1/0563/7721/3136/articles/wood_cutting_board_or_bamboo_cutting_board_44.jpg?v=1624954172'} alt="plater" />
          </div>
          <div className='directFoodGrid'>
            <h1 className="directFoodHeading" >{food.fields.name}</h1>
            <h1 className="directFoodInfo">-Ingredients- <br />{food.fields.ingredients}</h1>
            <h1 className="directFoodInfo">-Instruction- <br />{food.fields.instruction}</h1>
            <a className="directFoodLink" href={food.fields.direct}>{food.fields.direct}</a>
            <br /><br />
            <button className="deleteFoodButton" onClick={() => handleDelete(food.id)}>Delete</button>
          </div>
        </section>
      )
      )}
      <div className="extraFood">
      </div>
    </>
  )
}

export default DirectFoodPage