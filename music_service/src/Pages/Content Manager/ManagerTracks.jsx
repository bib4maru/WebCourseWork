import React from 'react';
import ManagerLayout from '../../Components/UI/Layout/ManagerLayout';
import { Box, Button, Card, Grid, TextField } from '@mui/material';
import TracksMain from '../../Components/UI/CardList/TracksMain';
import { useNavigate } from 'react-router-dom';

const ManagerTracks = () => {
    const navigate = useNavigate();
    return (
        <ManagerLayout>
            <Grid container sx={{justifyContent: "center", mt: 5}}>
            <Card sx={{width:"900px"}}>
                    <Box p={3}>
                        <Grid container sx={{justifyContent: "space-between"}} >
                            <h1>Список всех треков</h1>
                            <Button color='secondary' onClick={() => navigate("/tracks/create")}>Загрузить</Button>
                            <TracksMain/>
                        </Grid>
                    </Box>
                </Card>
            </Grid>
        </ManagerLayout>
    );
};

export default ManagerTracks;