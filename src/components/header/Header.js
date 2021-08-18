import React from "react"
import "../header/Header.css"
import reactSvg from "../../assets/react.svg"

const Header = () => {
    return(
        <div className="headerContainer">
            <img src={reactSvg} alt="reactSvg" />
        </div>
    )
}

export default Header