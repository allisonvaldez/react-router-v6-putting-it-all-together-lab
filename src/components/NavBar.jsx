// Import necessary style and components
import { NavLink } from "react-router-dom"
import './NavBar.css'

// Create a function for NavBar componenent
function NavBar() {
  return (
    // Role for navigation
    <nav className="navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
}

// Make globally available
export default NavBar;
