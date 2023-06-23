import { Box, Card, Grid } from '@mui/material';
import React from 'react';
import UserLayout from '../Components/UI/Layout/UserLayout';

const TracksPage = () => {
    return (
        <UserLayout>
            <Grid container sx={{justifyContent: "center", mt: 5}}>
                <Card sx={{width:"900px"}}>
                    <Box p={3}>
                        <Grid container sx={{justifyContent: "space-between"}} >
                            <h1>Список всех треков</h1>
                        </Grid>
                    </Box>
                </Card>
            </Grid>
        </UserLayout>
    );
};

export default TracksPage;