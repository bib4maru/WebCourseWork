import { AppBar, Button, IconButton, Menu, MenuItem, Toolbar } from '@mui/material';
import React, { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { useUser } from '../../../Store/store';
import { useNavigate } from 'react-router-dom';

const AdminBar = () => {
    const resetRole = useUser(state => state.SetRole),
        resetId = useUser(state => state.SetId),
        resetAuth = useUser(state => state.SetIsAuth);
    const navigate = useNavigate();
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClose = () => {
        setAnchorEl(null);
      };
    const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
    };
    const logOut = (e) => {
        e.preventDefault();
        resetId(null);
        resetRole(null);
        resetAuth(false);
        localStorage.removeItem("token");
        navigate("/");
    };
    
    return (
        <AppBar position='static' color='primary' 
        sx={{boxShadow: "none", backdropFilter: "blur(8px)", borderStyle: "solid",
            borderWidth: "0px 0px thin", borderColor: "#e7ebf0", zIndex: "1100", background: 'transparent' }}>
                <Toolbar>
                    <IconButton edge="start" color="secondary" sx={{ml: "350px", mr: "100px"}} onClick={() => {navigate("/main")}}>
                        <HomeIcon/>
                    </IconButton>
                    <Button variant='text' size='large' color='secondary' sx={{mr: "730px"}} onClick={handleMenu} >Пользователи</Button>
                    <Menu
                        id='menu_adminbar'
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem color='secondary' onClick={() => {navigate("/user/create")}} >Добавить</MenuItem>
                        <MenuItem color='secondary' onClick={() => {navigate("/user/edit")}} >Редактировать</MenuItem>
                        <MenuItem color='secondary' onClick={() => {navigate("/user/delete")}} >Удалить</MenuItem>
                    </Menu>
                    <Button color="secondary" onClick={logOut}> 
                        Выйти  
                    </Button>
                </Toolbar>
        </AppBar>
    );
};

export default AdminBar;