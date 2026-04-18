// Import necessarry components, useEffects, useState, and Outlet
import { Outlet } from "react-router-dom"
import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';

const DirectorContainer = () => {
    // Declare director and setDirector initial state to empty and shared with child routes and outlet context
    const [directors, setDirectors] = useState([])

    // Fetch all directors from backend on initial page load
    useEffect(() => {
        fetch("http://localhost:4000/directors")
            .then(r => {
                if (!r.ok) { throw new Error("failed to fetch directors") }
                return r.json()
            })
            .then(setDirectors)
            .catch(console.log)
    }, [])

    return (
        <>
            <NavBar />
            <main>
                <h1>Welcome to the Director's Directory!</h1>
                {/* Pass directors and setDirectors via context in order for children to read and update state */}
                <Outlet context={[directors, setDirectors]} />
            </main>
        </>
    );
}

// Make globally available
export default DirectorContainer;
