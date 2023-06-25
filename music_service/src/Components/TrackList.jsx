import { Box, Grid, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useTracks } from '../Store/store';
import {shallow} from 'zustand/shallow';
import { getAllTracks } from '../http/trackAPI';
import TrackItem from './TrackItem';

const TrackList = () => {
    const {tracks,setTracks} = useTracks(state => ({tracks: state.tracks, setTracks: state.setTracks}),shallow);
    const {filteredtracks,setFilteredTracks} = useTracks(state => ({filteredtracks: state.filteredtracks, setFilteredTracks: state.setFilteredTracks}),shallow);
    useEffect(() => {
        getAllTracks().then(data => {setTracks(data);setFilteredTracks(data);});
    },[]);

    return (
    <Grid container direction="column">
        <Box p={2}>
            {
                filteredtracks.map(tracksArr => <div key={tracksArr.musician}>{
                    tracksArr.tracks.map(track => 
                        <TrackItem key={track._id} track={track} musician={tracksArr.musician} />
                        )
                }</div>
            )}
        </Box>
    </Grid>       
    );
};

export default TrackList;