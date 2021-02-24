import React from "react";

export const MenuComponent = () => {
    let [activeClass, setClass] = React.useState(false)
    let onChangeClass = () => {
        if (!activeClass) {
            setClass(true)
        } else {
            setClass(false)
        }
    }
    return <div>
        <div className="menu_block" onClick={onChangeClass}>
            <span className={activeClass ? "mobile_menu active" : "mobile_menu"}> </span>
        </div>

        <div className={activeClass ? "menu active" : "menu"}>
            <ul>
                <li>home</li>
                <li>about me</li>
                <li>portfolio</li>
                <li>contact</li>
            </ul>
        </div>
    </div>
}