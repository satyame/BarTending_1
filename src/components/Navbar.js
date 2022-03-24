import { Link } from "react-router-dom";
import "./Navbar.css";
import About from './About'

function Navbar() {
  return (
    <section className="navbar">
      <div className="nav-center">
        <h1>Cocktail Playbook</h1>
        <ul className="navbar-links">
      <li><Link to = '/About'>About</Link></li>

            </ul>
      </div>
    </section>
  );
}

export default Navbar;
