import React from 'react';
import UserLayout from '../../Components/UI/Layout/UserLayout';
import { Box, Card, Grid, TextField } from '@mui/material';
import FvTracks from '../../Components/UI/CardList/FvTracks';
import { useFvTracks } from '../../Store/store';
import {shallow} from 'zustand/shallow';

const CollectionPage = () => {
    const fvtracks = useFvTracks(state => (state.fvtracks));
    const {filteredtracks,setFilteredTracks} = useFvTracks(state => ({filteredtracks: state.filteredtracks, setFilteredTracks: state.setFilteredTracks}),shallow);
    
    const handleSearch = (e) => {
        const results = [];
        fvtracks.filter((track) => {
            if (track.track.name.includes(e.target.value)) {
                results.push(track);
            }
        });
    setFilteredTracks(results);
    }
    return (
        <UserLayout>
            <Grid container sx={{justifyContent: "center", mt: 5}}>
                <Card sx={{width:"900px"}}>
                    <Box p={3}>
                        <Grid container sx={{justifyContent: "space-between"}}>
                            <h1>Ваша коллекция</h1>
                            <TextField
                                sx={{mt: 2}}
                                fullWidth
                                color='secondary'
                                label="Поиск"
                                onChange={(e) => {handleSearch(e)}}
                            />
                            <FvTracks/>
                        </Grid>
                    </Box>
                </Card>
            </Grid>
        </UserLayout>
        
    );
};

export default CollectionPage;