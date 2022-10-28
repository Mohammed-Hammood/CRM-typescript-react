import React, { useEffect, useState } from 'react';
import 'styles/common/header.scss';
import { Link } from "react-router-dom";
import { SideBar } from 'components';
import * as paths from "routes";
import { SVG } from 'components';


const Header = () => {
    const [isOpened, setIsOpened] = useState<boolean>(false);
    useEffect(() => {
        document.onclick = function (e) {
            const el = e.target as HTMLElement;
            const header = document.getElementById('header') as HTMLButtonElement;
            if (isOpened && !header.contains(el) && !header.isEqualNode(el)) {
                setIsOpened(false);
            }

        }
    }, [isOpened])
    return (
        <header className={isOpened ? 'mobile' : ""} id="header">
            <section className='first-group'>
                <Link className='header-button' to={paths.home_page_path} id="header_logo">
                    <SVG name='wrench' color='white' class='icon' />
                    Wrench CRM
                </Link>
                <button className='header-button mobile-button' onClick={() => setIsOpened(!isOpened)}>
                    <SVG name='bars' color='white' class='icon' />
                </button>
                <Link className='desktop-button' to={paths.profile_page_path}>
                    <SVG class="icon" name='circle-user' color='white' />
                    Мохаммед
                </Link>
            </section>
            {isOpened ? <>
                <section className='last-group'>

                <SideBar className='responsive-sidebar' />
                <Link className='header-button' to={paths.profile_page_path}>
                    <SVG class="icon" name='circle-user' color='white' />
                    Мохаммед
                </Link>
                </section>
            </> : null}

        </header>)
}

export default Header;