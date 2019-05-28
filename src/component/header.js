import React from 'react';

const Header = (props) => {
    return (
        <header data-test="headerComponent">
            <div className="wrap">
                <div className="logo">
                    <span>LOGO</span>
                </div>
            </div>
        </header>
    )
};

export default Header;