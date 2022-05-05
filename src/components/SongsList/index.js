import './index.css'

const SongsList = props => {
  const {suggestionDetails, deleteHistory} = props
  const {id, imageUrl, name, genre, duration} = suggestionDetails

  const onDeleteHistory = () => {
    deleteHistory(id)
  }

  return (
    <li className="list-item">
      <div className="image-name-genre-container">
        <img className="track-image" alt="track" src={imageUrl} />
        <div className="name-genre-container">
          <p className="name">{name}</p>
          <p className="genre">{genre}</p>
        </div>
      </div>
      <div className="duration-delete-button-container">
        <p className="duration">{duration}</p>
        <button
          testid="delete"
          type="button"
          className="delete-button"
          onClick={onDeleteHistory}
        >
          <img
            alt="delete"
            className="delete-icon"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          />
        </button>
      </div>
    </li>
  )
}

export default SongsList
