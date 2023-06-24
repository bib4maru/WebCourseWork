import React from 'react';
import ManagerBar from '../Navbar/ManagerBar';

const ManagerLayout = ({children}) => {
    return (
        <>
            <ManagerBar/>
            {children}
        </>
    );
};

export default ManagerLayout;