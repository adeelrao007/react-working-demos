
import React from 'react';
import Navigation from './Navigation';

const Header: React.FC = () => (
    <header className="header-light">
    {/* ...template header content will go here... */}
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="de-flex">
                        <div className="de-flex-col">
                            <div id="logo">
                            <a href="/">
                                <img className="logo-main" src="/assets/images/logo.webp" alt="Logo" />
                                <img className="logo-scroll" src="/assets/images/logo.webp" alt="Logo" />
                                <img className="logo-mobile" src="/assets/images/logo.webp" alt="Logo" />
                            </a>
                            </div>
                        </div>
                        <Navigation />
                    </div>
                </div>
            </div>
        </div>
    </header>
);

export default Header;
