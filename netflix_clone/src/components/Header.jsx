
import React from 'react'
import './Header.css'
import netflix_logo from "/src/images/netflix_logo.png"

export const Header = () => {
  return (
    <>
    <div id="header-id">
    <div className="header-layout">
        <div className="logo-box">
          <img className='netflix-logo' src={netflix_logo} alt="" />
          <div className="header-button">
            <div className="english-button"><i className="fa-solid fa-language netflix-logo-lang"></i>
              <select id="dropdown-language" name="options">
                <option value="option1">English</option>
                <option value="option2">Hindi</option>
              </select>
            </div>
            <div className="sign-in-button">Sign in</div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
