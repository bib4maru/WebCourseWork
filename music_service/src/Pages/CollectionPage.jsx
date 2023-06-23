import React from 'react';
import UserLayout from '../Components/UI/Layout/UserLayout';
import { Box, Card, Grid } from '@mui/material';
import FvTracks from '../Components/UI/CardList/FvTracks';

const CollectionPage = () => {
    return (
        <UserLayout>
            <Grid container sx={{justifyContent: "center", mt: 5}}>
                <Card sx={{width:"900px"}}>
                    <Box p={3}>
                        <Grid container sx={{justifyContent: "space-between"}}>
                            <h1>Ваша коллекция</h1>
                            <FvTracks/>
                        </Grid>
                    </Box>
                </Card>
            </Grid>
        </UserLayout>
        
    );
};

export default CollectionPage;