import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { DropDown, SVG } from 'components';
import * as paths from "routes";
import 'styles/common/sidebar.scss';

interface Props {
    className?: string
}
const SideBar: React.FC<Props> = (props: Props): JSX.Element => {
    const { className } = props;
    const [onExpand, setOnExpand] = useState<boolean>(true);
    useEffect(() => {

    }, [className])
    return (
        <div className={`sidebar__container ${className}`}>
            {!className ?
                <div className="sidebar__logo">
                    <h2 className="logo">Меню</h2>
                </div>
                : null}
            <nav className="sidebar_nav">
                {!className ?
                    <NavLink end className={({ isActive }) => isActive ? "active" : "link"} to={paths.home_page_path} onClick={() => setOnExpand(!onExpand)}>
                        <SVG color={className ? "white" : "black"} class='icon' name="home" />
                        Главная
                    </NavLink>
                    : null}
                <NavLink className={({ isActive }) => isActive ? "active" : "link"} to={paths.address_page_path} onClick={() => setOnExpand(!onExpand)}>
                    <SVG color={className ? "white" : "black"} class='icon' name="search" />
                    Поиск адресов
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? "active" : "link"} to={paths.table_page_path} onClick={() => setOnExpand(!onExpand)}>
                    <SVG color={className ? "white" : "black"} class='icon' name="table" />
                    Таблицы
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? "active" : "link"} to={paths.calender_page_path} onClick={() => setOnExpand(!onExpand)}>
                    <SVG color={className ? "white" : "black"} class='icon' name="calender" />
                    Календарь

                </NavLink>
                <NavLink className={({ isActive }) => isActive ? "active" : "link"} to={paths.maps_page_path} onClick={() => setOnExpand(!onExpand)}>
                    <SVG color={className ? "white" : "black"} class='icon' name="location-dot" />
                    Карты
                </NavLink>
                <NavLink className={({ isActive }) => isActive ? "active" : "link"} to={paths.widgets_page_path} onClick={() => setOnExpand(!onExpand)}>
                    <SVG color={className ? "white" : "black"} class='icon' name="widgets" />

                    Виджеты
                </NavLink>
                <DropDown className={className} />
                <NavLink className={({ isActive }) => isActive ? "active" : "link"} to={paths.exit_page_path} onClick={() => setOnExpand(!onExpand)}>
                    <SVG name="arrow-right-from-bracket" color={className ? "white" : "black"} class="icon" />
                    Выход
                </NavLink>
            </nav>
        </div>
    )
}

export default SideBar;