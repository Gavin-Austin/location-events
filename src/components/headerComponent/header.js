import React from 'react';

function Header() {
    return (
        <header>
            <div className={"logo"}>
                LOGO
            </div>

            <nav>
                <ul>
                    <li>
                        <a href={"#"}>Home</a>
                    </li>
                    <li>
                        <a href={"#"}>Popular</a>
                    </li>
                    <li>
                        <a href={"#"}>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;