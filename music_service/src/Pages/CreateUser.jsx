import { Autocomplete, Avatar, Box, Button, Container, CssBaseline, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import AdminLayout from '../Components/UI/Layout/AdminLayout';
import { addUser } from '../http/userAPI';

const roles = ["Admin", "User", "Content Manager"];
const CreateUser = () => {
    const [authlogin,setLogin] = useState("");
    const [password,setPassword] = useState("");
    const [role,setRole] = useState("");

    const handleAdd = async (e) => {
        try {
            e.preventDefault();
            const response = await addUser(authlogin,password,role);
            setLogin("");
            setPassword("");
            setRole("");
        } catch (e) {
            alert(e.response.data.msg);
            setLogin("");
            setPassword("");
            setRole("");
        }
    }
    return (
        <AdminLayout>
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
                    <PersonAddIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Добавление пользователя
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
                        id='password'
                        value={password}
                        onChange={e =>setPassword(e.target.value)}
                    />
                    <Autocomplete
                        id='role'
                        color='secondary'
                        options={roles}
                        fullWidth
                        value={role}
                        onChange={(event,newValue) => setRole(newValue)}
                        renderInput={(params) => <TextField {...params} label="Выбор роли" color='secondary' margin='normal' required />}
                    />
                    <Button
                        color='secondary'
                        type='submit'
                        fullWidth
                        variant='contained'
                        sx={{mt: 3, mb: 2}}
                        onClick={handleAdd}
                    >
                        Добавить
                    </Button>
                </Box>
            </Box>
        </Container>
        </AdminLayout>
    );
};

export default CreateUser;