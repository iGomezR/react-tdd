import React from 'react';
import Logo from '../assets/graphics/logo.png';

const Header = (props) => {
    return (
        <header data-test="headerComponent">
            <div className="wrap">
                <div className="logo">
                    <img data-test="headerLogo" src={Logo} alt="Logo" />
                </div>
            </div>
        </header>
    )
};

export default Header;