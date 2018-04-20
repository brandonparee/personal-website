import React, { Component } from 'react'
import Link from 'gatsby-link'

import ExternalLink from '../ExternalLink'

class Header extends Component {
  state = {
    menuState: '',
  }

  handleMenuClick = () => {
    if (this.state.menuState) {
      this.setState({ menuState: '' })
    } else {
      this.setState({
        menuState: 'is-active',
      })
    }
  }

  render() {
    return (
      <nav className="navbar is-dark">
        <div className="navbar-brand">
          <Link
            className="navbar-item"
            activeClassName="is-active"
            to="/"
            exact
          >
            Home
          </Link>
          <div
            className={`navbar-burger burger ${this.state.menuState}`}
            onClick={this.handleMenuClick}
          >
            <span />
            <span />
            <span />
          </div>
        </div>

        <div className={`navbar-menu ${this.state.menuState}`}>
          <div className="navbar-start">
            <Link
              onClick={this.handleMenuClick}
              activeClassName="is-active"
              className="navbar-item"
              to="/portfolio"
            >
              Portfolio
            </Link>
            <Link
              onClick={this.handleMenuClick}
              activeClassName="is-active"
              className="navbar-item"
              to="/resume"
            >
              Resume
            </Link>
            <Link
              onClick={this.handleMenuClick}
              activeClassName="is-active"
              className="navbar-item"
              to="/blog"
            >
              Blog
            </Link>
          </div>
          <div className="navbar-end">
            <ExternalLink
              href="https://github.com/brandonparee"
              className="navbar-item"
            >
              Github
            </ExternalLink>
            <ExternalLink
              href="https://www.linkedin.com/in/brandonparee"
              className="navbar-item"
            >
              LinkedIn
            </ExternalLink>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
