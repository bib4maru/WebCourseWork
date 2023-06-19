import React from 'react';
import HeaderBar from '../Navbar/HeaderBar';

const UserLayout = ({children}) => {
    return (
        <>
            <HeaderBar/>
            {children}
        </>
    );
};

export default UserLayout;