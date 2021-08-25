import { Link } from 'react-router-dom'
import './Drinks.css'

function Drinks(props) {
  const { name, image, description } = props.drink.fields

  return (
    <>
      <Link className="directLink" to={`/drinks/${props.drink.id}`} >
        <article className="drinkList">
          <div>
            <img className="drinkImage" src={image ? image : 'https://thumbor.thedailymeal.com/LaejLerD2WBfDRbcIfF5XED8Pj0=//https://www.thedailymeal.com/sites/default/files/2019/08/26/Cocktail_History_HERO.jpg'} alt="drink" />
          </div>
          <div>
            <h1 className="drinkHeading">{name}</h1>
            <h4 className="drinkDescription">{description}</h4>
            <h4 className="drinkClick">Click to Read More</h4>
          </div>
        </article>
      </Link >
    </>
  )
}

export default Drinks