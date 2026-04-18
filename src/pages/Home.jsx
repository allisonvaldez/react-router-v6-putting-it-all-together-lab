// Import necessary components and Links
import { Link } from "react-router-dom"
import NavBar from "../components/NavBar"

// Create a function component for Home
function Home() {
  return (
    <>
      <NavBar />
      <main>
        <h1>🎬 Welcome to the Movie Directory 🎥</h1>
        <p>
          Explore a collection of famous directors and their iconic movies. Click below to start exploring!
        </p>
        <nav>
          {/* Links components for navigating to directors and about page */}
          <Link to="/directors">View Directors</Link> |{" "}
          <Link to="/about">Learn More About This App</Link>
        </nav>
      </main>
    </>
  )
}

// Make it globally available
export default Home
