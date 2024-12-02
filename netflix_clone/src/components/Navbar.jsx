import React from 'react'
import './Navbar.css'



const Navbar = () => {
    return (
        <>
            <div className="navbox">
            <nav>
                    <ul>
                        <li>
                            <a href="#popular-now">Popular Now</a>
                        </li>
                        <li>
                            <a href="#plans">Plans</a>
                        </li>
                        <li>
                            <a href="#join">Reasons to Join</a>
                        </li>
                        <li>
                            <a href="#foq">FOQ</a>
                        </li>
                    </ul>
                </nav>

            </div>
        </>
    )
}

export default Navbar