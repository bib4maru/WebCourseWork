import React from 'react';
import AdminBar from '../Navbar/AdminBar';

const AdminLayout = ({children}) => {
    return (
        <>
            <AdminBar/>
            {children}
        </>
    );
};

export default AdminLayout;