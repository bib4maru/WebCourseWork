import React from 'react';
import ManagerLayout from '../../Components/UI/Layout/ManagerLayout';
import { Box, Button, Card, Grid, TextField } from '@mui/material';
import TracksMain from '../../Components/UI/CardList/TracksMain';
import { useNavigate } from 'react-router-dom';
import { useTracks } from '../../Store/store';
import {shallow} from 'zustand/shallow';
const ManagerTracks = () => {
    const navigate = useNavigate();
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
        <ManagerLayout>
            <Grid container sx={{justifyContent: "center", mt: 5}}>
            <Card sx={{width:"900px"}}>
                    <Box p={3}>
                        <Grid container sx={{justifyContent: "space-between"}} >
                            <h1>Список всех треков</h1>
                            <Button color='secondary' onClick={() => navigate("/tracks/create")}>Загрузить</Button>
                            <TextField
                                sx={{mt: 2}}
                                fullWidth
                                color='secondary'
                                label="Поиск"
                                onChange={(e) => {handleSearch(e)}}
                            />
                            <TracksMain/>
                        </Grid>
                    </Box>
                </Card>
            </Grid>
        </ManagerLayout>
    );
};

export default ManagerTracks;