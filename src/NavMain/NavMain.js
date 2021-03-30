import React, { Component } from 'react'
import { /*NavLink*/ Link } from 'react-router-dom'
import './NavMain.css'


export class NavMain extends Component {
    render() {
        return (
            <div className="main-nav-links">
                <Link to="/">Welcome</Link>
                <Link to="/user/:userId">Home</Link>
                <Link to="/add-card">Add an Experience Card</Link>
                <Link to="/add-folder">Add a Folder</Link>
            </div>
        )
    }
}

export default NavMain