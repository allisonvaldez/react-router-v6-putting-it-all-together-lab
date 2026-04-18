// Import Link, Outlet, useParams, and useOutletContext for routing and context
import { Link, Outlet, useParams } from "react-router-dom"
import { useOutletContext } from "react-router-dom"

// Create a DirectorCard function
function DirectorCard() {
    // Gather director id from URL
    const { id } = useParams();
    // Set initial values from the parent for directors and setDirectors
    const [directors, setDirectors] = useOutletContext();
    // Find the matching director by id — named director not directors to avoid conflict
    const director = directors.find(d => String(d.id) === String(id))

    // Perform error handling if director id doesnt match anything
    if (!director) {
        return <h2>Director not found.</h2>
    }

    return (
        <div>
            <h2>{director.name}</h2>
            <p>{director.bio}</p>
            <h3>Movies:</h3>
            <ul>
                {/* Each movie should link to its own detail page */}
                {director.movies.map((movie) => (
                    <li key={movie.id}>
                        <Link to={`movies/${movie.id}`}>{movie.title}</Link>
                    </li>
                ))}
            </ul>
            <Link to={`movies/new`}>Add New Movie</Link>
            {/* Outlet renders MovieCard or MovieForm depending on the current route */}
            <Outlet context={[directors, setDirectors]} />
        </div>
    )
}

// Make it globally available
export default DirectorCard