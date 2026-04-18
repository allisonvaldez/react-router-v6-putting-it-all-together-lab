// Import useState, useParams, useNavigate, useOutletContext, and uuidv4
import { useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import { useParams, useNavigate } from "react-router-dom"
import { useOutletContext } from "react-router-dom"

// Create MovieForm function
function MovieForm() {
  // Set initial states
  const [title, setTitle] = useState("")
  const [time, setTime] = useState("")
  const [genres, setGenres] = useState("")

  // Get director id from URL
  const { id } = useParams()
  const navigate = useNavigate()
  // Pull directors and setDirectors from context
  const [directors, setDirectors] = useOutletContext()

  // Find the matching director to attach the new movie to
  const director = directors.find(d => String(d.id) === String(id))

  if (!director) { return <h2>Director not found.</h2> }

  // Prevent default
  const handleSubmit = (e) => {
    e.preventDefault()
    const newMovie = {
      id: uuidv4(),
      title,
      time: parseInt(time),
      genres: genres.split(",").map((genre) => genre.trim()),
    }
    fetch(`http://localhost:4000/directors/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ movies: [...director.movies, newMovie] })
    })
      .then(r => {
        if (!r.ok) { throw new Error("failed to add movie") }
        return r.json()
      })
      .then(data => {
        console.log(data)
        // Replace the updated director in shared state
        setDirectors(directors.map(d => d.id === data.id ? data : d))
        // Redirect to the newly created movie's detail page
        navigate(`/directors/${id}/movies/${newMovie.id}`)
      })
      .catch(console.log)
  }

  return (
    <div>
      <h2>Add New Movie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Movie Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Duration (minutes)"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Genres (comma-separated)"
          value={genres}
          onChange={(e) => setGenres(e.target.value)}
          required
        />
        <button type="submit">Add Movie</button>
      </form>
    </div>
  )
}

// Make it globally available
export default MovieForm

