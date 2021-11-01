import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link className="navbar-brand ms-5" to="/">Home</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            {/* <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only"></span></a>
                            </li> */}
                            <li className="nav-item active">
                                <Link className="nav-link" to="/products">Our Items</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/cart">Cart</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/signin">Sign In</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
