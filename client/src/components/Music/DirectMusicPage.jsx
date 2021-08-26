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
        <section className='specific'>
          <div>
            <img className="specificMusicImage" src={music.fields.album ? music.fields.album : 'https://www.maketecheasier.com/assets/uploads/2019/11/add-art-missing-1.jpg'} alt="drink" />
          </div>
          {/* <div className='directMusicGrid'>
            <br /><br />
            <button className="deleteButton" onClick={() => handleDelete(music.id)}>Delete</button>
          </div> */}
        </section>
      )
      )}
      <div className="extra">
      </div>
    </>
  )
}

export default DirectMusicPage