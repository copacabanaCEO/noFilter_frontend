import React, { useState, useEffect, useRef } from "react"
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom"
import { BrandButtonDefault } from "../../library/Button"

const SignUpButton = () => { 
    const [visible, setVisible] = useState(false)
    const [title, setTitle] = useState(localStorage.getItem('title'))
    const [showSignUpButton, setShowSignUpButton] = useState(true);
    const displayMenu = () => {
        if (title == "Yujin님, 환영합니다") {
            setVisible(true)
        }
    }
    const hideMenu = () => {
        setVisible(false)
    }

    useEffect(() => {
        localStorage.setItem('title', title);
    }, [title]);
    useEffect(() => {
        if (title == "Yujin님, 환영합니다") {
            setShowSignUpButton(false)
        }
    });

    const onClickLogin = () => {
        setTitle("Yujin님, 환영합니다");
        setShowSignUpButton(false);
    }
    const onClickLogout = () => {
        setTitle("Login");
        setShowSignUpButton(true)
    }
    return (
        <div className="flex xs:hidden items-center ml-auto">
            {showSignUpButton && <Link to="/signup" className="mr-5">
                <BrandButtonDefault
                    type="button"
                    value="Sign up"
                />
            </Link>}
            <div className="block" onMouseLeave={hideMenu}>
                <Nav.Link
                    className="flex text-white xl:mr-6 sm:mr-8 md:mr-8 mr-4" 
                    onMouseOver={displayMenu} 
                    onClick={onClickLogin}>
                        {title}
                </Nav.Link>
                <div className={`${visible ? 'block' : 'hidden'} absolute w-48`} >
                    <div className="mt-4 rounded-tr-base rounded-tl-base bg-gray-50 px-4 py-4 w-full">
                        <div className="block">
                            <p className="text-gray-500 text-xs font-sans font-semibold mt-6">MyPage</p>
                            <div className="mt-2">
                                <div className={`flex justify-start my-2`}>
                                    <Nav.Link href={`/mypage/`} className="text-gray-700 text-base-14 hover:text-brand" >Profile</Nav.Link>
                                </div>
                                <div className={`flex justify-start my-2`}>
                                    <Nav.Link href={`/mypage/`} className="text-gray-700 text-base-14 hover:text-brand" >Settings</Nav.Link>
                                </div>
                            </div>
                            <p className="text-gray-500 text-xs font-sans font-semibold mt-6">General</p>
                            <div className="mt-2">
                                <div className={`flex justify-start my-2`}>
                                    <Nav.Link href={`/mypage/`} className="text-gray-700 text-base-14 hover:text-brand" onClick = {onClickLogout}>Log out</Nav.Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
)}

export default SignUpButton