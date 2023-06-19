import { Card } from '@mui/material';
import React from 'react';

const TracksPage = () => {
    return (
        <Grid container justifyContent="center">
            <Card sx={{width:"900px"}}>
                <Grid container justifyContent="space-beetween" >
                    <h1>Список всех треков</h1>
                </Grid>
            </Card>
        </Grid>
    );
};

export default TracksPage;