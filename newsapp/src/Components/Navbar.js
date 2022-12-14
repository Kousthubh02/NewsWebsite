import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Navbar extends Component {
  

  render() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">NewsApp</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li  className="nav-item">
                <a className="nav-link" aria-current="page" href="/">Home</a>
              </li>
             
              <li className="nav-item"> <a className="nav-link" href="/Business">Business</a> </li>
              <li className="nav-item"> <a className="nav-link" href="/Entertainment">Entertainment</a> </li>
              <li className="nav-item"> <a className="nav-link" href="/General">General</a> </li>
              <li className="nav-item"> <a className="nav-link" href="/Health">Health</a> </li>
              <li className="nav-item"> <a className="nav-link" href="/Health">Health</a> </li>
              <li className="nav-item"> <a className="nav-link" href="/Sports">Sports</a> </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Navbar

