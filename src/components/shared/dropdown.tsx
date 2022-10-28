import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import SVG from "./svg";
import "styles/components/dropdown.scss";
import * as paths from "routes";


const DropDown = (props: { className?: string }) => {
    const { className } = props;
    const [isDropdownActive, setIsDropdownActive] = useState<boolean>(true);
    const [isVisible, setIsVisible] = useState<boolean>(true);
    return (
        <div className="dropdown">
            <div className="content" onClick={() => setIsDropdownActive(!isDropdownActive)}>
                <SVG name="gear" color={className ? "white" : "black"} class="icon" />
                Настройки
            </div>
            <div onChange={() => setIsDropdownActive(!isDropdownActive)} className={isDropdownActive ? "dropdown_hidden" : "dropdown_active"}>
                <NavLink end className={({ isActive }) => isActive ? "active_link top_link" : "link"} to={paths.profile_settings_page_path} onClick={() => setIsVisible(!isVisible)}>
                    <SVG name="user-2" color={className ? "white" : "black"} class="icon" />
                    Настройки профиля
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? "active_link " : "link"} to={paths.fianance_page_path} onClick={() => setIsVisible(!isVisible)}>
                    <SVG name="cash-register" color={className ? "white" : "black"} class="icon" />
                    Управление финансами
                </NavLink>
            </div>
        </div>
    )
}

export default DropDown;