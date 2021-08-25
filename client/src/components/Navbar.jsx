import { Link } from 'react-router-dom'

import './Navbar.css'


function Navbar() {
  return (
    <nav>
      <Link className='NavBar' to='/' className="heading">Party On!</Link><br />
      <Link className='NavBar' to='/drinks' exact>Drinks</Link>
      <Link className='NavBar' to='/food'>Party Dishes</Link>
    </nav>
  )
}

export default Navbar