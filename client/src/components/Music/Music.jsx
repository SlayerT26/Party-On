import { Link } from 'react-router-dom'
import './Music.css'

function Music(props) {

  const { name, album, artist } = props.music.fields

  return (
    <>
      <Link className="directMusicLink" to={`/music/${props.music.id}`}>
        <article className='musicList'>
          <div>
            <img className="albumImage" src={album ? album : 'https://www.maketecheasier.com/assets/uploads/2019/11/add-art-missing-1.jpg'} alt="album" />
          </div>
          <div>
            <h1 className="musicHeading">{name}</h1>
            <h1 className="musicArtist">{artist}</h1>
            <h4 className="musicClick">Click to listen</h4>
          </div>
        </article>
      </Link>
    </>
  )
}

export default Music