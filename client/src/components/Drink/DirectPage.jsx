import axios from 'axios'
import { useParams } from 'react-router-dom'
import { postDrinkURL, config, drinkURL } from '../../sources'
import './DirectPage.css'

function DirectPage(props) {
  const params = useParams()

  const handleDelete = async () => {
    await axios.delete(`${drinkURL}/${props.drink.id}`, config)
  }

  return (
    <>
      {props.drink.filter((drink) => params.id === drink.id).map((drink) => (
        <section className='specific'>
          <div>
            <img className="specificImage" src={drink.fields.Image ? drink.fields.Image : 'https://thumbor.thedailymeal.com/LaejLerD2WBfDRbcIfF5XED8Pj0=//https://www.thedailymeal.com/sites/default/files/2019/08/26/Cocktail_History_HERO.jpg'} alt="drink" />
          </div>
          <div>
            <h1>{drink.fields.Name}</h1>
            <h1>{drink.fields.Steps}</h1>
            <h1>{drink.fields.Ingredients}</h1>
            <a href={drink.fields.Direct}>{drink.fields.Direct}</a>
            <br /><br />
            <button onClick={handleDelete}>Delete </button>
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