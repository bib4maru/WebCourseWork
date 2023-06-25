import { Avatar, Box, Button, Container, CssBaseline, Grid, Link, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { useNavigate } from 'react-router-dom';
import { registration } from '../http/userAPI';

const Registration = () => {
    const navigate = useNavigate();
    const [authlogin,setLogin] = useState("");
    const [password,setPassword] = useState("");
    const handleRegistration = async (e) => {
        try {
            e.preventDefault();
            const response = await registration(authlogin,password);
            setLogin("");
            setPassword("");
        } catch (e) {
            alert(e.response.data.msg);
            setLogin("");
            setPassword("");
        }
    }
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
                    Регистрация
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
                        onClick={handleRegistration}
                    >
                        Зарегистрироваться
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Link href="" variant="body2" color='secondary' 
                                onClick={(e) => {e.preventDefault(); navigate("/")}}>
                                Уже есть аккаунт? Войти
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default Registration;