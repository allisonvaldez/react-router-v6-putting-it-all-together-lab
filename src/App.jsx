// Import BrowserRouter, Routes, and Route to set up client-side routing
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import DirectorContainer from "./pages/DirectorContainer"
import DirectorList from "./pages/DirectorList"
import DirectorForm from "./pages/DirectorForm"
import DirectorCard from "./pages/DirectorCard"
import MovieForm from "./pages/MovieForm"
import MovieCard from "./pages/MovieCard"
import ErrorPage from "./pages/ErrorPage"

// Declare a main app component
const App = () => {
    return (
        // BrowserRouter enables client-side routing throughout the app
        <BrowserRouter>
            <Routes>
                {/* Home and About are top-level routes */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />

                {/* DirectorContainer is the parent route for all director pages */}
                <Route path="/directors" element={<DirectorContainer />}>
                    {/* DirectorList renders by default at /directors */}
                    <Route index element={<DirectorList />} />
                    {/* New director form at /directors/new */}
                    <Route path="new" element={<DirectorForm />} />
                    {/* Individual director page with nested movie routes */}
                    <Route path=":id" element={<DirectorCard />}>
                        <Route path="movies/new" element={<MovieForm />} />
                        <Route path="movies/:movieId" element={<MovieCard />} />
                    </Route>
                </Route>

                {/* Wildcard catches any invalid routes */}
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}

// Make it globally available
export default App