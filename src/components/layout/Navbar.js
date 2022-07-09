import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Navbar({ icon, title }) {
  return (
   
      <nav  className='navbar bg-primary'>
        <h1>
          <i className={icon} /> {title}
        </h1>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/kuchbhi'>About</Link>
          </li>
        </ul>
      </nav>
   
  );
}
Navbar.defaultProps = {
  icon: "fab fa-github",
  title: "pushpy finder",
};
Navbar.propTypes = {
  icon: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default Navbar;
