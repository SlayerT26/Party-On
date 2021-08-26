import { Link } from 'react-router-dom'

import './Navbar.css'


function Navbar() {
  return (
    <>
      <div className="mainMenu">
        <Link to='/' className="heading">Party On!</Link><br />
      </div>
      <nav>
        <Link className='NavBar' to='/drinks'>Drinks</Link>
        <Link className='NavBar' to='/food'>Food</Link>
        <Link className='NavBar' to='/music'>Music</Link>
        <Link className='NavBar' to='/help'>Help</Link>
      </nav>
    </>
  )
}

export default Navbar