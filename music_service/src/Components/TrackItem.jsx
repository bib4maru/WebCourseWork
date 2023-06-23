import { Card } from '@mui/material';
import React from 'react';
import DownloadIcon from '@mui/icons-material/Download';

const TrackItem = (props) => {
    return (
        <Card className='track'>
            <DownloadIcon/>
        </Card>
    );
};

export default TrackItem;