import React from "react"
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../../../public/logo.png';

const Logo = () => (
    <Navbar>
        <Nav  >
        <Nav.Link href="/index">
        <span className="font-bold text-white text-2xl flex flex-col bg-brand w-12 h-12 rounded-full justify-center items-center text-center cursor-pointer
            ">
            NF
        </span></Nav.Link>
        </Nav>
    </Navbar>)

export default Logo