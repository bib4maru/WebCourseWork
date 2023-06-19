import { AppBar,Button, IconButton, Toolbar } from '@mui/material';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
const HeaderBar = () => {
    return (
        <AppBar position='static' color='primary' 
        sx={{boxShadow: "none", backdropFilter: "blur(8px)", borderStyle: "solid",
            borderWidth: "0px 0px thin", borderColor: "#e7ebf0", zIndex: "1100", background: 'transparent' }} >
                <Toolbar>
                <IconButton edge="start" color="secondary" sx={{ml: "350px", mr: "100px"}} >
                    <HomeIcon/>
                </IconButton>
                <Button variant='text' size='large' color='secondary' sx={{mr: "80px"}} >Треки</Button>
                <Button variant='text' size='large' color='secondary'sx={{mr: "650px"}} >Коллекция</Button>
                <Button color="secondary"> 
                  Выйти  
                </Button>
            </Toolbar>
        </AppBar>
    );
};

export default HeaderBar;