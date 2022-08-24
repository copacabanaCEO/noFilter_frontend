import React from "react"
import SubMenu from "./SubMenu"
import { items } from "./state"

const Menu = ({ isVisible }) => {

    return (<div className={`${isVisible ? 'block' : 'hidden'} absolute w-48`} >
        <div className="mt-4 rounded-tr-base rounded-tl-base bg-gray-50 px-4 py-4 w-full">
            <SubMenu items={items} />
        </div>
    </div>)
}
export default Menu