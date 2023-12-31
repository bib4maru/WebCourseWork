import { Card, Grid, IconButton, Tooltip } from '@mui/material';
import React, { useEffect } from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { useUser } from '../Store/store';
import { addtoCollection } from '../http/collectionAPI';
import { DownloadAudio } from '../http/trackAPI';

const TrackItem = (props) => {
    const userId = useUser(state => (state.id));
    const {mes,SetMes} = useUser((state) => ({mes: state.errorMessage, SetMes: state.SetMes}));
    const addToCollection = async (e) => {
        try {
            e.preventDefault();
            await addtoCollection(userId,props.track._id);
        } catch (e) {
            SetMes(e.response.data.msg);
            alert(e.response.data.msg);
        }
    }
    return (
        <Card className='track'>
            <img width={70} height={70} src={props.track.picture}/>
            <Grid container direction="column" sx={{width: "200px", margin: "0 20px"}}>
                <div>{props.track.name}</div>
                <div className='musician'>{props.musician}</div>
            </Grid>
            <Tooltip title="Добавить в коллекцию">
                <IconButton sx={{ml: "auto"}} color='secondary' onClick={addToCollection}>
                    <PlaylistAddIcon/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Скачать аудио">
            <IconButton color='secondary'onClick={() => DownloadAudio(props.track.audio, `${props.musician} - ${props.track.name}`)}>
                <DownloadIcon/>
            </IconButton> 
            </Tooltip>
        </Card>
    );
};

export default TrackItem;