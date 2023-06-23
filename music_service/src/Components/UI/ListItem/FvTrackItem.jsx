import { Card, Grid, IconButton, Tooltip } from '@mui/material';
import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import DeleteIcon from '@mui/icons-material/Delete';
const FvTrackItem = (props) => {
    return (
        <Card className='track'>
             <img width={70} height={70} src={props.track.picture}/>
             <Grid container direction="column" sx={{width: "200px", margin: "0 20px"}}>
                <div>{props.track.name}</div>
                <div className='musician'>{props.musician}</div>
             </Grid>
             <Tooltip title="Скачать аудио">
                <IconButton sx={{ml: "auto"}} color='secondary'>
                    <DownloadIcon/>
                </IconButton>
             </Tooltip>
             <Tooltip title="Удалить из коллекции">
                <IconButton color='secondary'>
                    <DeleteIcon/>
                </IconButton>
             </Tooltip>
        </Card>
    );
};

export default FvTrackItem;