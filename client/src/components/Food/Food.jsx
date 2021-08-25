import './Food.css'
import { Link } from 'react-router-dom'

function Food(props) {
  const { name, image, description } = props.food.fields

  return (
    <>
      <Link className="foodLink" to={`/food/${props.food.id}`} >
        <article className="foodList">
          <div>
            <img className="directFoodImage" src={image ? image : 'http://cdn.shopify.com/s/files/1/0563/7721/3136/articles/wood_cutting_board_or_bamboo_cutting_board_44.jpg?v=1624954172'} alt="platter" />
          </div>
          <div>
            <h1 className="foodHeading">{name}</h1>
            <h4 className="foodDescription">{description}</h4>
            <h4 className="foodClick">Click to Read More</h4>
          </div>
        </article>
      </Link>
    </>
  )
}

export default Food