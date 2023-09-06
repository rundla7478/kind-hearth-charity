import React from 'react';
import { Link } from 'react-router-dom';

function Nav(){
	return(
       <>
         <nav className="navbar navbar-expand-lg bg-light shadow-lg">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src="images/logo.png" className="logo img-fluid" alt="Kind Heart Charity" />
                    <span>
                        Kind Heart Charity
                        <small>Non-profit Organization</small>
                    </span>
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link click-scroll" href="#top">Home</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link click-scroll" href="#section_2">About</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link click-scroll" href="#section_3">Causes</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link click-scroll" href="#section_4">Volunteer</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link click-scroll" href="#section_5">News</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link click-scroll" href="#section_6">Contact</a>
                        </li>

                        <li className="nav-item ms-3">
                            <Link className="nav-link custom-btn custom-border-btn btn" to="/donate">Donate</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
       </>
	);
}
export default Nav;