import { Box, Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useFvTracks, useUser } from '../../../Store/store';
import {shallow} from 'zustand/shallow';
import { getAllFvTracks } from '../../../http/collectionAPI';
import FvTrackItem from '../ListItem/FvTrackItem';

const FvTracks = () => {
    const {fvtracks,setTracks} = useFvTracks(state => ({fvtracks: state.fvtracks, setTracks: state.setTracks}),shallow);
    const {filteredtracks,setFilteredTracks} = useFvTracks(state => ({filteredtracks: state.filteredtracks, setFilteredTracks: state.setFilteredTracks}),shallow);
    const userId = useUser(state => (state.id));
    useEffect(() => {
        getAllFvTracks(userId).then(data => {setTracks(data); setFilteredTracks(data)});
    },[])

    return (
        <Grid container direction="column">
            <Box p={2}>
                {filteredtracks.map(track => (
                    <FvTrackItem key={track.track._id} track={track.track} musician={track.musician} />
                ))}
            </Box>
        </Grid>
    );
};

export default FvTracks;