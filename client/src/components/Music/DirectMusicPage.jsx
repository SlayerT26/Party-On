import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'
import { config, musicURL } from '../../sources'
// import './DirectMusicPage.css'
import ReactPlayer from 'react-player';


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
            url={music.fields.direct}
          />
        </section>
      )
      )}
    </>
  )
}

export default DirectMusicPage