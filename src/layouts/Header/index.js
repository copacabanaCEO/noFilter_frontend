import React, { Fragment } from "react"
import Logo from "../../components/features/Logo"
import LoginButton from "../../components/features/Login"
import SearchField from "../../components/features/Search"
import Navigation from "../../components/features/Navigation"
import SignUpButton from "../../components/features/Signup"

const Header = () => (
    <Fragment>
        <header className="
                           flex justify-start bg-brand-dark py-2 px-10 items-center ">
            <Logo/>
            <SearchField />
            <div className="flex flex-grow items-center">
                <div className="xs:hidden sm:hidden md:hidden">
                    <Navigation />
                </div>
                <div className="flex xs:hidden items-center ml-auto">
                    <LoginButton />
                </div>
            </div>

        </header>
    </Fragment>)

export default Header