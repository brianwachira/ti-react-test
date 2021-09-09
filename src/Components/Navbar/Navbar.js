import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {

    return (
       <>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container-fluid">
                    <Link to='/'  className="navbar-brand">
                        <button type="button" className="btn"> <i className="fa fa-home text-secondary" aria-hidden="true"></i></button>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="w-100 navbar-nav justify-content-start">
                            <li className="nav-item pt-2 pe-5">
                                <Link to='/'>Home</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar