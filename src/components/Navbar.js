import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="container">
      <ul className="navbar">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'link active' : 'link')}
          >
            Contact Us
          </NavLink>
        </li>
      </ul>
      <div>
        <ul className="right">
          <li>
            <NavLink
              to="/cart"
              className={({ isActive }) => (isActive ? 'link active' : 'link')}
            >
              Cart
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? 'link active' : 'link')}
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}
export default Navbar
