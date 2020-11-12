import React from 'react'
import "./Header.scss";

let ToggleMenu = ()=>{
    document.querySelector(".TheLinks").classList.toggle("Menu-On-Click")
}

function TheLink(props){
    return(
        <React.Fragment>
            <li><a href={props.pageLink}>{props.pageName}</a></li>
        </React.Fragment>
    )
}

function PageLinks(props){
    return (
      <React.Fragment>
        <TheLink pageLink="/" pageName="Home" />
        <TheLink pageLink="/explore" pageName="Explore" />
        <TheLink pageLink="/About" pageName="About Us" />
      </React.Fragment>
    )
}

function Header(props) {
    return (
        <div className="Header">
            <nav className="Navbar">
                <h5 id="Logo">Mr.DevSam</h5>
                <div className="Menu">
                    <div onClick={ToggleMenu} onKeyDown={ToggleMenu} className="Hamburger"></div>
                    <div className="TheLinks">
                        <PageLinks />
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header
