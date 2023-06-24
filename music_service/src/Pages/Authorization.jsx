import { Avatar, Box, Button, Container, CssBaseline, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useUser } from '../Store/store';
import { useNavigate } from 'react-router-dom';
import { login } from '../http/userAPI';

const Authorization = () => {
    const signIn = async (e) => {
        try {
            e.preventDefault();
            const response = await login(authlogin,password);
            newRole(response._role);
            newId(response._id);
            SetIsAuth(true);
            navigate("/main");
        } catch (e) {
            SetMes(e.response.data.msg);
            alert(mes);
            setLogin("");
            setPassword("");
        }
    }

    const newRole = useUser((state) => (state.SetRole));
    const newId = useUser((state) => (state.SetId));
    const {mes,SetMes} = useUser((state) => ({mes: state.errorMessage, SetMes: state.SetMes}));
    const {isAuth,SetIsAuth} = useUser((state) => ({ isAuth: state.isAuth, SetIsAuth : state.SetIsAuth}));
    const [authlogin,setLogin] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline/>
            <Box
                sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Авторизация
                </Typography>
                <Box component="form" sx={{ mt: 1 }}>
                    <TextField
                        color='secondary'
                        margin='normal'
                        required
                        fullWidth
                        id='login'
                        label='Логин'
                        name='login'
                        autoFocus
                        value={authlogin}
                        onChange={e =>setLogin(e.target.value)}
                    />
                    <TextField
                        color='secondary'
                        margin='normal'
                        required
                        fullWidth
                        name='password'
                        label='Пароль'
                        type='password'
                        id='password'
                        value={password}
                        onChange={e =>setPassword(e.target.value)}
                    />
                    <Button
                        color='secondary'
                        type='submit'
                        fullWidth
                        variant='contained'
                        sx={{mt: 3, mb: 2}}
                        onClick={signIn}
                    >
                        Войти
                    </Button>
                </Box>
            </Box>
        </Container>
    );  
};

export default Authorization;