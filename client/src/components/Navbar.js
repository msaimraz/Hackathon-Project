import React, { useContext } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { NavLink } from 'react-router-dom';
import { UserContext } from "../App";

const Navbar = () => {

    const { state, dispatch } = useContext(UserContext);

    const RenderTitle = () => {
        if (state) {
            return (
                <NavLink className="navbar-brand h3" to="/">Student Portal</NavLink>
            )
        } else {
            return (
                <NavLink className="navbar-brand h3" to="/">SMIT-Programs</NavLink>
            )
        }
    }

    const RenderMenu = () => {
        if (state) {
            return (
                <>
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/courses">Courses</NavLink>
                    <NavLink className="nav-link" to="/logout">Logout</NavLink>
                </>
            )
        } else {
            return (
                <>
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/courses">Courses</NavLink>
                    <NavLink className="nav-link" to="/signin">Login</NavLink>
                    <NavLink className="nav-link" to="/signup">Register</NavLink>
                </>
            )
        }
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <RenderTitle />
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ml-auto">
                        <RenderMenu />

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;