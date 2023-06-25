import { Box, Card, Grid, TextField } from '@mui/material';
import React, { useState } from 'react';
import UserLayout from '../../Components/UI/Layout/UserLayout';
import TrackList from '../../Components/TrackList';
import { useTracks } from '../../Store/store';
import {shallow} from 'zustand/shallow';

const TracksPage = () => {
    const tracks = useTracks(state => (state.tracks));
    const {filteredtracks,setFilteredTracks} = useTracks(state => ({filteredtracks: state.filteredtracks, setFilteredTracks: state.setFilteredTracks}),shallow);

    const handleSearch = (e) => {
        const results = [];
        tracks.map((item) => {
            const musician = { ...item };
            musician.tracks = item.tracks.filter((track) =>
            track.name.includes(e.target.value)
            );
            if (musician.tracks.length > 0) {
            results.push(musician);
            }
    });
    setFilteredTracks(results);
    }
    return (
        <UserLayout>
            <Grid container sx={{justifyContent: "center", mt: 5}}>
                <Card sx={{width:"900px"}}>
                    <Box p={3}>
                        <Grid container sx={{justifyContent: "space-between"}} >
                            <h1>Список всех треков</h1>
                            <TextField
                                sx={{mt: 2}}
                                fullWidth
                                color='secondary'
                                label="Поиск"
                                onChange={(e) => {handleSearch(e)}}
                            />
                            <TrackList/>
                        </Grid>
                    </Box>
                </Card>
            </Grid>
        </UserLayout>
    );
};

export default TracksPage;