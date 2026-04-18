// Import necessary components, useStates, useNavigate, and useOutletContext
import { useNavigate } from "react-router-dom"
import { useOutletContext } from "react-router-dom"
import { useState } from "react"

// Create a funciton for DirectorForm
function DirectorForm() {
  // Declare initial states for name, directors, and bio
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [directors, setDirectors] = useOutletContext;


  // Redirect via useNavigate upon successful form submission
  const navigate = useNavigate();

  // Prevent default
  const handleSubmit = (e) => {
    e.preventDefault()
    const newDirector = { name, bio, movies: [] }
    // POST data to the backend
    fetch("http://localhost:4000/directors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newDirector)
    })
      .then(r => {
        if (!r.ok) { throw new Error("failed to add director") }
        return r.json()
      })
      .then(data => {
        // Add new director to the shared state for immediate rendergin
        setDirectors([...directors, data])
        // Redirect to new director page
        navigate(`/directors/${data.id}`)
      })
      .catch(console.log)
  }

  return (
    <div>
      <h2>Add New Director</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Director's Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Director's Bio"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          required
        />
        <button type="submit">Add Director</button>
      </form>
    </div>
  )
}

// Make globally available
export default DirectorForm
