import React from 'react';
import { Card, Grid, IconButton, Tooltip } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/Delete';
import { DownloadAudio, deleteTrack, getAllTracks } from '../../../http/trackAPI';
import { useTracks } from '../../../Store/store';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate } from 'react-router-dom';

const TrackMainItem = (props) => {

    const setTracks = useTracks(state => (state.setTracks));
    const handleDelete = async (e) => {
        try {
            e.preventDefault();
            await deleteTrack(props.track._id);
            await getAllTracks().then(data => setTracks(data));
        } catch (e) {
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
            <Tooltip title="Скачать аудио">
            <IconButton color='secondary' sx={{ml: "auto"}} onClick={() => DownloadAudio(props.track.audio, `${props.musician} - ${props.track.name}`)}>
                <DownloadIcon/>
            </IconButton> 
            </Tooltip>
            <Tooltip title="Удалить">
                <IconButton color='secondary' onClick={handleDelete}>
                    <DeleteIcon/>
                </IconButton>
            </Tooltip>
        </Card>
    );
};

export default TrackMainItem;