import React, { useState } from 'react';
import ManagerLayout from '../../Components/UI/Layout/ManagerLayout';
import { Avatar, Box, Button, Container, CssBaseline, TextField, Typography } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Create } from '../../http/musicianAPI';

const AddMusician = () => {
    const [username,setUsername] = useState("");
    const [Firstname,setFirstname] = useState("");
    const [Surname,setSurname] = useState("");

    const handleAdd = async (e) => {
        try {
            e.preventDefault();
            const response = await Create(username,Firstname,Surname);
            setUsername("");
            setFirstname("");
            setSurname("");
        } catch (e) {
            alert(e.response.data.msg);
            setUsername("");
            setFirstname("");
            setSurname("");
        }
    }

    return (
        <ManagerLayout>
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
                    Добавление исполнителя
                </Typography>
                <Box component="form" sx={{ mt: 1 }}>
                    <TextField
                        color='secondary'
                        margin='normal'
                        required
                        fullWidth
                        id='Username'
                        label='Псевдоним'
                        name='Username'
                        autoFocus
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                    />
                    <TextField
                        color='secondary'
                        margin='normal'
                        required
                        fullWidth
                        name='Firstname'
                        label='Имя'
                        value={Firstname}
                        onChange={e =>setFirstname(e.target.value)}
                    />
                    <TextField
                        color='secondary'
                        margin='normal'
                        required
                        fullWidth
                        name='Surname'
                        label='Фамилия'
                        value={Surname}
                        onChange={e =>setSurname(e.target.value)}
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
        </ManagerLayout>
    );
};

export default AddMusician;