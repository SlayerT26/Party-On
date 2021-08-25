import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import { postDrinkURL, config, drinkURL } from '../../sources'
import './DirectPage.css'

function DirectPage(props) {
  const params = useParams()
  const history = useHistory()
  const handleDelete = async (id) => {
    await axios.delete(`${drinkURL}/${id}`, config)
    props.setToggleFetch((curr) => !curr)
    history.push('/drinks')
  }

  return (
    <>
      {props.drink.filter((drink) => params.id === drink.id).map((drink) => (
        <section className='specific'>
          <div>
            <img className="specificImage" src={drink.fields.image ? drink.fields.image : 'https://thumbor.thedailymeal.com/LaejLerD2WBfDRbcIfF5XED8Pj0=//https://www.thedailymeal.com/sites/default/files/2019/08/26/Cocktail_History_HERO.jpg'} alt="drink" />
          </div>
          <div>
            <h1>{drink.fields.name}</h1>
            <h1>{drink.fields.steps}</h1>
            <h1>{drink.fields.ingredients}</h1>
            <a href={drink.fields.direct}>{drink.fields.direct}</a>
            <br /><br />
            <button className="deleteButton" onClick={() => handleDelete(drink.id)}>Delete </button>
          </div>

        </section>
      )
      )}
      <div className="extra">
      </div>
    </>

  )
}

export default DirectPage