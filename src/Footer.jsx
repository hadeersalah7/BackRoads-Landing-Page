import React from 'react'
import { pagesLinks, pagesData } from './components/data'
const Footer = () => {
    return (
        <footer className="section footer">
            <ul className="footer-links">
                {pagesData.map((link) => {
                    const { id, href, title } = link
                    return (
                        <li key={id}>
                            <a href={href} className="footer-link">{title}</a>
                        </li>
                    )
                })}
            </ul>

            <ul className="footer-icons">
                {pagesLinks.map((link) => {
                    const { id, href, icon } = link
                    return (
                        <li key={id}>
                            <a href={href} target="_blank" className="footer-icon"
                            ><i className={icon} />
                            </a>
                        </li>
                    )
                })}

            </ul>
            <p className="copyright">
                copyright &copy; Backroads travel tours company
                <span id="date"></span> all rights reserved
            </p>
        </footer>
    )
}
export default Footer