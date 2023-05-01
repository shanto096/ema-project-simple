import React from 'react';
import Nav from '../Nav/Nav';
import { Outlet, useNavigation } from 'react-router-dom';

const Header = () => {
    const navigation= useNavigation()
    return (
        <div>
            <Nav></Nav>
            <div>
                {navigation.state === "loading" ? "loading..." : "" }
                </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Header;