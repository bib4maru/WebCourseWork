import React from 'react';
import AdminLayout from '../../Components/UI/Layout/AdminLayout';
import { Typography } from '@mui/material';

const AdminMain = () => {
    return (
        <AdminLayout>
            <div className='Mainpage_container'>
                <Typography variant='h1'
                    sx={{mt: 25,
                        textAlign: "center"
                    }}
                > Добро пожаловать! </Typography>
            </div>
        </AdminLayout>
    );
};

export default AdminMain;