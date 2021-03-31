import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ApiContext from '../ApiContext'
import './NavMain.css'


export class NavMain extends Component {
    static contextType = ApiContext

  renderLoggedInLinks() {
    if (this.context.loggedIn) {
      return (
        <>
          <Link className='text-link' to="/user/:userId">Home</Link>
          <Link className='text-link' to="/add-card">Add an Experience Card</Link>
          <Link className='text-link' to="/add-folder">Add a Folder</Link>
        </>
      );
    }
  }
    render() {
        return (
            <div className="main-nav-links">
                <Link className='text-link' to="/">Welcome</Link>
                {this.renderLoggedInLinks()}
            </div>
        )
    }
}

export default NavMain