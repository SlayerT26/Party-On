import axios from 'axios'
import { useState, } from 'react'
import { musicURL, config } from '../../sources'
import './MusicSuggestion.css'
import { useHistory } from 'react-router-dom'

function MusicSuggestion(props) {

  const [name, setName] = useState('')
  const [artist, setArtist] = useState('')
  const [album, setAlbum] = useState('')
  const [direct, setDirect] = useState('')

  const history = useHistory()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const newSong = {
      name,
      artist,
      album,
      direct
    }
    await axios.post(musicURL, { fields: newSong }, config)
    props.setToggleFetch((mus) => !mus)
    history.push('/music')
  }

  return (
    <>
      <h1 className="NewMusicHeading">New Party Song</h1>
      <form onSubmit={handleSubmit} className="inputMusic">
        <label className='musicLabel' htmlFor='name'>Song Name: </label>
        <input className='musicInput' required id='name' type='text' onChange={(e) => setName(e.target.value)} value={name} /><br />
        <label className='musicLabel' htmlFor='artist'>Artist: </label>
        <input className='musicInput' required id='artist' type='text' onChange={(e) => setArtist(e.target.value)} value={artist} /><br />
        <label className='musicLabel' htmlFor='album'>Album Cover: </label>
        <input className='musicInput' required id='album' type='text' onChange={(e) => setAlbum(e.target.value)} value={album} /><br />
        <label className='musicLabel' htmlFor='url'>Youtube URL: </label>
        <input className='musicInput' required id='url' type='url' onChange={(e) => setDirect(e.target.value)} value={direct} /><br />
        <br />
        <button className='submitMusicButton' type='submit'>Submit</button>
      </form>
      <div className="extra">
      </div>
    </>
  )
}

export default MusicSuggestion