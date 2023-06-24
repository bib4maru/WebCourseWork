import { Box, Card, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import UserLayout from '../Components/UI/Layout/UserLayout';
import TrackList from '../Components/TrackList';
import { useTracks } from '../Store/store';
import {shallow} from 'zustand/shallow';

const TracksPage = () => {
    return (
        <UserLayout>
            <Grid container sx={{justifyContent: "center", mt: 5}}>
                <Card sx={{width:"900px"}}>
                    <Box p={3}>
                        <Grid container sx={{justifyContent: "space-between"}} >
                            <h1>Список всех треков</h1>
                            <TrackList/>
                        </Grid>
                    </Box>
                </Card>
            </Grid>
        </UserLayout>
    );
};

export default TracksPage;