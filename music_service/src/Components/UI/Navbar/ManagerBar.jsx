import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar } from '@mui/material';
import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { useUser } from '../../../Store/store';
import { useNavigate } from 'react-router-dom';
const ManagerBar = () => {
    const resetRole = useUser(state => state.SetRole),
        resetId = useUser(state => state.SetId),
        resetAuth = useUser(state => state.SetIsAuth);
    const navigate = useNavigate();
    const [frAnchorEl,setFrAnchorEl] = useState(null);
    const [sdAnchorEl,setsdAnchorEl] = useState(null);
    const logOut = (e) => {
        e.preventDefault();
        resetId(null);
        resetRole(null);
        resetAuth(false);
        localStorage.removeItem("token");
        navigate("/");
    };

    const handleTrackMenu = () => {
        setFrAnchorEl(null);
      };
    const openTrackMenu = (event) => {
        setFrAnchorEl(event.currentTarget);
    }
    const handleMusicianMenu = () => {
        setsdAnchorEl(null);
    }
    const openMusicianMenu = (event) => {
        setsdAnchorEl(event.currentTarget);
    }
    return (
        <AppBar position='static' color='primary' 
        sx={{boxShadow: "none", backdropFilter: "blur(8px)", borderStyle: "solid",
            borderWidth: "0px 0px thin", borderColor: "#e7ebf0", zIndex: "1100", background: 'transparent' }}>
                <Toolbar>
                    <IconButton edge="start" color="secondary" sx={{ml: "350px", mr: "100px"}} onClick={() => {navigate("/main")}}>
                        <HomeIcon/>
                    </IconButton>
                    <Button  variant='text' size='large' color='secondary' sx={{mr: "80px"}} onClick={openTrackMenu}>Треки</Button>
                    <Menu 
                        id='track_menu'
                        anchorEl={frAnchorEl}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        open={Boolean(frAnchorEl)}
                        onClose={handleTrackMenu}
                    >
                        <MenuItem color='secondary' onClick={() => {navigate("/tracks/main")}}>Главная</MenuItem>
                    </Menu>
                    <Button variant='text' size='large' color='secondary'sx={{mr: "650px"}} onClick={openMusicianMenu}>Исполнители</Button>
                    <Menu
                        d='musician_menu'
                        anchorEl={sdAnchorEl}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        open={Boolean(sdAnchorEl)}
                        onClose={handleMusicianMenu}
                    >
                        <MenuItem color='secondary' onClick={() => {navigate("/musician/create")}}>Добавить</MenuItem>
                        <MenuItem color='secondary' onClick={() => navigate("/musician/edit")}>Редактировать</MenuItem>
                        <MenuItem color='secondary'onClick={() => {navigate("/musician/delete")}}>Удалить</MenuItem>
                    </Menu>
                    <Button color="secondary" onClick={logOut}>Выйти</Button>
                </Toolbar>
        </AppBar>
    );
};

export default ManagerBar;