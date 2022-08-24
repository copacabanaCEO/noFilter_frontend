import React from "react"
import * as ROUTES from "../../../constants/routes"
import Nav from 'react-bootstrap/Nav';

const Linker = () => (
    <nav>
        <ul className="flex text-white font-helvetica tracking-wide text-base xs:text-xs sm:text-sm md:text-sm justify-between xs:px-6">
            <li>
                <Nav.Link href={ROUTES.REVIEWS.link} className="xl:mr-6 sm:mr-8 md:mr-8 mr-4">
                    {ROUTES.REVIEWS.name}
                </Nav.Link>
            </li>
            <li>
                <Nav.Link href={ROUTES.POSTS.link} className="xl:mr-6 sm:mr-8 md:mr-8 mr-4">
                    {ROUTES.POSTS.name}
                </Nav.Link>
            </li>
        </ul>
    </nav>
)
export default Linker