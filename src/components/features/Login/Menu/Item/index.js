import React from "react"
import Nav from 'react-bootstrap/Nav';

const Item = ({ name, route }) => (
        <Nav.Link href={`/mypage/${route}`} className="text-gray-700 text-base-14 hover:text-brand" > {name}</Nav.Link>
        )

export default Item