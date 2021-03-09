import React, { Component } from 'react'
import {Link} from 'react-router-dom'


export default class navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
        <Link to="/" className="navbar-brand">ExcerTracker</Link>
        <div className="collpase navbar-collapse" style={{color: 'white', marginLeft: '13em'}}>
            <ul className="navbar-nav " style={{marginBlockStart: '0.5em', marginBlockEnd: '0.5em', marginInlineStart:'0px',marginInlineEnd:'0px', paddingInlineStart:'40px'}}>
                <li className="navbar-item">
                <Link to="/" className="nav-link">About me</Link>
                </li>
                <li className="navbar-item">
                <Link to="/create" className="nav-link">Projects</Link>
                </li>
                <li className="navbar-item">
                <Link to="/user" className="nav-link">Testimonials</Link>
                </li>
                <li className="navbar-item">
                <Link to="/user" className="nav-link">Stack</Link>
                </li>
                <li className="navbar-item">
                <Link to="/user" className="nav-link">Contact</Link>
                </li>
            </ul>
        </div>
      </nav>
        )
    }
}