import { Link } from 'react-router-dom'

import './Navbar.css'


function Navbar() {
  return (
    <>
      <div className="mainMenu">
        <Link to='/' className="heading">Party On!</Link><br />
      </div>
      <nav>
        <Link id="IdBar" className='NavBar' to='/drinks'>Drinks</Link>
        <Link id="IdBar" className='NavBar' to='/food'>Food</Link>
        <Link id="IdBar" className='NavBar' to='/music'>Music</Link>
        <Link id="IdBar" className='NavBar' to='/help'>Help</Link>
      </nav>
    </>
  )
}

export default Navbar