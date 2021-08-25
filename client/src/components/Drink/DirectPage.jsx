import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import { config, drinkURL } from '../../sources'
import './DirectPage.css'
import { Button } from 'react-bootstrap'

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
          <div className='directGrid'>
            <h1 className="directHeading" >{drink.fields.name}</h1>
            <h1 className="directInfo">-Ingredients- <br />{drink.fields.ingredients}</h1>
            <h1 className="directInfo">-Instruction- <br />{drink.fields.steps}</h1>
            <a className="directlink" href={drink.fields.direct}>{drink.fields.direct}</a>
            <br /><br />
            <button className="deleteButton" onClick={() => handleDelete(drink.id)}>Delete</button>
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