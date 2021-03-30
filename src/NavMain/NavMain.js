import React, { Component } from 'react'
import { /*NavLink*/ Link } from 'react-router-dom'
import './NavMain.css'


export class NavMain extends Component {
    render() {
        return (
            <div className="main-nav-links">
                <Link to="/landing">Welcome</Link>
                <Link to="/">Home</Link>
                <Link to="/add-session">Add an Experience Card</Link>
                <Link to="/session/:sessionId">Card Details</Link>
            </div>
        )
    }
}

export default NavMain