import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Drinks.css'

function Drinks(props) {
  const { Name, Steps, Ingredients, Direct, Image } = props.drink.fields

  return (
    <>
      <Link className="directLink" to={`/drinks/${props.drink.id}`} >
        <article className="drinkList">
          <div>
            <img className="directImage" src={Image ? Image : 'https://thumbor.thedailymeal.com/LaejLerD2WBfDRbcIfF5XED8Pj0=//https://www.thedailymeal.com/sites/default/files/2019/08/26/Cocktail_History_HERO.jpg'} alt="drink" />
          </div>
          <div>
            <h1>{Name}</h1>
            <h4>{Steps}</h4>
            <h4>{Ingredients}</h4>
            <h5>{Direct ? Direct : "URL not available"}</h5>
          </div>
        </article>
      </Link >
    </>
  )
}

export default Drinks