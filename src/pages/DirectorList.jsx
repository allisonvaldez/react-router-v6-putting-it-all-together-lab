// Import link component and useOutletContext
import { Link } from "react-router-dom"
import { useOutletContext } from "react-router-dom"

// Define a variable DirectorsList from a function 
const DirectorList = () => {
    // from getting directors from their parents in the container
    const [directors] = useOutletContext();

    // Make sure that the link navigates to each director's page
    const displayDirectors = directors.map(d => (
        <li key={d.id}><Link to={`${d.id}`}>{d.name}</Link></li>
    ))

    return (
        <ul>
            {displayDirectors}
        </ul>
    );
}

// Make it globally available
export default DirectorList;
