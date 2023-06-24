import React, { useEffect, useState } from 'react';
import AdminLayout from '../Components/UI/Layout/AdminLayout';
import { Autocomplete, Avatar, Box, Button, Container, CssBaseline, TextField, Typography } from '@mui/material';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { deleteUser, getAllUsers } from '../http/userAPI';
import { useUser, useUsers } from '../Store/store';
const DeleteUser = () => {
    const userId = useUser(state => (state.id));
    const {users,setUsers} = useUsers(state => ({ users: state.users, setUsers: state.setUsers}));
    const [id,setId] = useState(null);
    useEffect(() => {
        getAllUsers(userId).then(data => setUsers(data));
    },[])

    const handleDelete = async (e) => {
        try {
            e.preventDefault();
            await deleteUser(id);
            await getAllUsers(userId).then(data => setUsers(data));
        } catch (e) {
            alert(e.response.data.msg);
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
                    <PersonRemoveIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Удаление пользователя
                </Typography>
                <Box component="form" sx={{ mt: 1 }}>
                    <Autocomplete
                        sx={{ width: 600 }}
                        id='users'
                        color='secondary'
                        options={users}
                        getOptionLabel={(option) => `Логин:${option.login} Роль:${option.role}`}
                        onChange={(event,newValue) => { if (newValue != null) setId(newValue._id)}}
                        renderInput={(params) => <TextField {...params} label="Выбор пользователя" color='secondary' margin='normal' required fullWidth />}
                    />
                    <Button
                        color='secondary'
                        type='submit'
                        fullWidth
                        variant='contained'
                        sx={{mt: 3, mb: 2}}
                        onClick={handleDelete}
                    >
                        Удалить
                    </Button>
                </Box>
            </Box>
        </Container>
        </AdminLayout>
    );
};

export default DeleteUser;