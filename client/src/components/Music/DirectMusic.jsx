import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import { config, musicURL } from '../../sources'
import ReactPlayer from 'react-player';
import './DirectMusic.css'


function DirectMusicPage(props) {

  const params = useParams()
  const history = useHistory()
  const handleDelete = async (id) => {
    await axios.delete(`${musicURL}/${id}`, config)
    props.setToggleFetch((curr) => !curr)
    history.push('/music')
  }

  return (
    <>
      {props.music.filter((music) => params.id === music.id).map((music) => (
        <section className='Musicspecific'>
          <ReactPlayer
            playing={true}
            controls={true}
            width="650px"
            height="430px"
            url={music.fields.direct}
            id="musicvideo" />
          <div className='directMusicGrid'>
            <h1 className="directMusicHeading" >{music.fields.name}</h1>
            <h3 className="title">-Artist-</h3>
            <h1 className='directMusicArtist'>{music.fields.artist}</h1>
            <h3 className="title">-Direct URL-</h3>
            <a className="directMusicLink" href={music.fields.direct}>{music.fields.direct}</a>
            <br /><br />
            <button className="deleteMusicButton" onClick={() => handleDelete(music.id)}>Delete</button>
          </div>
        </section>
      )
      )}
      <div className="extraMusic">
      </div>
    </>
  )
}

export default DirectMusicPage