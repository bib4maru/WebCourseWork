import React from 'react';
import { Typography } from '@mui/material';
const Main = () => {
    return (
        <div className='Mainpage_container'>
            <Typography variant='h1'
                sx={{mt: 25,
                    textAlign: "center"
                }}
            > Добро пожаловать! </Typography>
        </div>
    );
};

export default Main;