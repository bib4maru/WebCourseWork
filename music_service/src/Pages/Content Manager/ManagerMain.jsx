import React from 'react';
import ManagerLayout from '../../Components/UI/Layout/ManagerLayout';
import { Typography } from '@mui/material';

const ManagerMain = () => {
    return (
        <ManagerLayout>
            <div className='Mainpage_container'>
                <Typography variant='h1'
                    sx={{mt: 25,
                        textAlign: "center"
                    }}> Добро пожаловать! </Typography>
            </div>
        </ManagerLayout>
    );
};

export default ManagerMain;