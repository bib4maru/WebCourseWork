import { Card, Grid, IconButton, Tooltip } from '@mui/material';
import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/Delete';
import { useFvTracks, useUser } from '../../../Store/store';
import { deleteFvTrack, getAllFvTracks } from '../../../http/collectionAPI';
import { DownloadAudio } from '../../../http/trackAPI';
const FvTrackItem = (props) => {
    const userId = useUser(state => (state.id));
    const {mes,SetMes} = useUser((state) => ({mes: state.errorMessage, SetMes: state.SetMes}));
    const setFvTracks = useFvTracks(state => (state.setTracks));


    const deleteFromCollection = async (e) => {
        try {
            e.preventDefault();
            await deleteFvTrack(userId,props.track._id);
            await getAllFvTracks(userId).then(data => setFvTracks(data));
        } catch (e) {
            SetMes(e.response.data.msg);
            alert(mes);
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
                <IconButton sx={{ml: "auto"}} color='secondary' onClick={() => DownloadAudio(props.track.audio, `${props.musician} - ${props.track.name}`)} > 
                    <DownloadIcon/>
                </IconButton>
             </Tooltip>
             <Tooltip title="Удалить из коллекции">
                <IconButton color='secondary' onClick={deleteFromCollection}>
                    <DeleteIcon/>
                </IconButton>
             </Tooltip>
        </Card>
    );
};

export default FvTrackItem;