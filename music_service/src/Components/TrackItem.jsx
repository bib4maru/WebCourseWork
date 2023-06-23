import { Card, Grid, IconButton, Tooltip } from '@mui/material';
import React, { useEffect } from 'react';
import DownloadIcon from '@mui/icons-material/Download';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { useSingleMusician } from '../Store/store';
import {shallow} from 'zustand/shallow';
import { getOneMusician } from '../http/musicianAPI';

const TrackItem = (props) => {
    // const {musician,setMusician} = useSingleMusician(state => ({musician: state.musician, setMusician: state.setMusician}),shallow);
    // const findingMusician = async () => {
    //     const response = await getOneMusician(props.track.owner);
    //     setMusician(response);
    // }
    // findingMusician();
    return (
        <Card className='track'>
            <img width={70} height={70} src={props.track.picture}/>
            <Grid container direction="column" sx={{width: "200px", margin: "0 20px"}}>
                <div>{props.track.name}</div>
                <div>{props.musician}</div>
            </Grid>
            <Tooltip title="Добавить в коллекцию" >
                <IconButton sx={{ml: "auto"}} color='secondary'>
                    <PlaylistAddIcon/>
                </IconButton>
            </Tooltip>
            <Tooltip title="Скачать аудио">
            <IconButton color='secondary'>
                <DownloadIcon/>
            </IconButton> 
            </Tooltip>
        </Card>
    );
};

export default TrackItem;