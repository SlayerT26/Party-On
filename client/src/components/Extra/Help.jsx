// import ReactPlayer from "react-player"
import { Link } from 'react-router-dom'
import './Help.css'

function Help() {
  return (
    <>
      <div className='helpVideo'>
        <div>
          <h1 className='helpTitle'>Need a little help. Here's a motivational video.</h1>
        </div>
        <div className='extraHelp' >
          <Link to='moreHelp'>
            <button className="helpButton" >Need a laugh, click here.</button>
          </Link>
        </div>
        <div className='firstHelp'>
          {/* <ReactPlayer
            playing={true}
            width="850px"
            height="630px"
            url="www.youtube.com/watch?v=dCYUvCdiPfI" /> */}
        </div>
      </div>
    </>
  )
}

export default Help