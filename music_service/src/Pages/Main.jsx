import React from 'react';
import { Typography } from '@mui/material';
import UserLayout from '../Components/UI/Layout/UserLayout';
const Main = () => {
    return (
        <UserLayout>
            <div className='Mainpage_container'>
                <Typography variant='h1'
                    sx={{mt: 25,
                        textAlign: "center"
                    }}
                > Добро пожаловать! </Typography>
            </div>
        </UserLayout>
    );
};

export default Main;