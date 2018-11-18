import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export const Header = ({branding}) => (
  <nav className="navbar navbar-expand-sm navbar-dark bg-primary mb-3 py-0">
    <div className="container">
      <a href="/" className="navbar-brand" data-testid="brand">
        {branding}
      </a>
      <div>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link to="/" className="nav-link home" data-testid="home">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/people" className="nav-link list" data-testid="people">
              People
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link about" data-testid="about">
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

Header.defaultProps = {
  branding: 'My App',
}

Header.propTypes = {
  branding: PropTypes.string,
}

export default Header
