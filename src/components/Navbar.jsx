import React from 'react'
import logo from "../images/logo.svg"
import { pagesData, pagesLinks } from './data'
const Navbar = () => {
    return (
        <>
            <nav className="navbar">
                <div className="nav-center">
                    <div className="nav-header">
                        <img src={logo} className="nav-logo" alt="backroads" />
                        <button type="button" className="nav-toggle" id="nav-toggle">
                            <i className="fas fa-bars" />
                        </button>
                    </div>
                    {/* <!-- left this comment on purpose --> */}
                    <ul className="nav-links" id="nav-links">
                        {pagesData.map((data) => {
                            return (
                                <li key={data.id}>
                                    <a href={data.href} className='nav-link'>{data.title}</a>
                                </li>
                            )

                        })}
                    </ul>

                    <ul className="nav-icons">
                        {pagesLinks.map((link) => {
                            return (
                                <li key={link.href}>
                                    <a href={link.href} target="_blank" className="nav-icon"
                                    ><i className={link.icon} /></a>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar