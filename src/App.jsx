// Import necessary components, route and routes, and browserroutes
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import DirectorContainer from "./pages/DirectorContainer"
import DirectorList from "./pages/DirectorList"
import DirectorForm from "./pages/DirectorForm"
import DirectorCard from "./pages/DirectorCard"
import MovieForm from "./pages/MovieForm"
import MoivieCard from "./pages/MovieCard"
import ErrorPage from "./pages/ErrorPage"

// Declare a main app component
const App = () => {
    return (
        // BrowserRouter will allow for client-side routing for the app
        <BrowserRouter>
            <Routes>
                {/* Put Home and About as top level */}
                <Route path="/" element={<Home />}>
                    <Route path="/about" element={<About />}>
                        {/* Place DirectorContainer here at is it the parent of all director pages */}
                        <Route path="/directors" element={<DirectorContainer />}>
                            {/* Next is New Director List */}
                            <Route index element={<DirectorList />} />
                            {/* Next is New Director Form */}
                            <Route path="new" element={<DirectorForm />} />
                            {/* Director page with nested movie routes */}
                            <Route path=":id" element={<DirectorCard />}>
                                <Route path="movies/new" element={<MovieForm />} />
                                <Route path="movies/:movieId" element={<MovieCard />} />
                            </Route>
                        </Route>
                        {/* Handle invalid routes */}
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </BrowserRouter >
                )
}
                // Make it globally available
                export default App
