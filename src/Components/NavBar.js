import React from 'react'

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg " style={{height: "80px",background:'white'}}>
            <div className="container-fluid mx-5">
                <a className="navbar-brand" href="#">Jisna</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <a className="nav-link me-3" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link" href="#About">About</a>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link" href="#skills">Skills</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#project">Projects</a>
                        </li>
                    </ul>
                </div>
                <a className="nav-link" href="#Contact"><button type='submit' className='btn btn-outline-primary'>Contact</button></a>
            </div>
        </nav>
    )
}

export default NavBar
