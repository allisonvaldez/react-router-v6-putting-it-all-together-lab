// Import useParams and useOutletContex
import { useParams } from "react-router-dom"
import { outOutletContext } from "react-router-dom"

// Create a function for MovieCard
function MovieCard() {
  // Id and movieId from URL Parameters
  const { id, movieId } = useParams()

  // Get directors from context
  const [directors] = useOutletContext()

  // Locate correct director
  const director = directors.find(d => String(d.id) === String(id))
  if (!director) return <h2>Director not found.</h2>

  // Locate the correct movie within Director's movies
  const movie = director.movies.find(m => String(m.id) === String(movieId))
  if (!movie) return <h2>Movie not found.</h2>

  return (
    <div>
      <h2>{movie.title}</h2>
      <p>⏱️ Duration: {movie.time} minutes</p>
      <p>🎬 Genres: {movie.genres.join(", ")}</p>
    </div>
  )
}

// Make it globally available
export default MovieCard
