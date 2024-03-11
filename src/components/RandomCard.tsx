import '../styles/RandomCard.scss'

export function RandomCard () {
  return (
    <>
      <div className={'random-film'}>
        <h1>Random Film</h1>
        <div>
          <p>Rating</p>
          <p>Genre</p>
          <p>Year</p>
          <p>Country</p>
          <p>Duration</p>
        </div>
        <h1>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis, magni.</h1>
        <button>Watch Trailer</button>
        <button>Add to Favorites</button>
      </div>
    </>
  )
}
