import React from 'react'

//Styles
import './Header.style.css';
//Exporting components
const Header = () => {
    //Hooks

    //Functions

    //return value
    return(
        <header className="header-wrapper">
            <div className="header-item">
                Logo Here
            </div>
            <div className="header-item">
                <nav className="link-list-item">
                    <ul className="nav-list-wrapper" type = 'none'>
                        <li className="nav-list-item"><a href="">Product</a></li>
                        <li className="nav-list-item"><a href="">Resources</a></li>
                        <li className="nav-list-item"><a href="">Contact</a></li>
                        <li className="nav-list-item"><a href="">Login</a></li>
                        <li className="nav-list-item btn btn-primary"><a href="">Free Trail</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;