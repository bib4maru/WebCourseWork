import React, { useEffect, useState } from 'react';
import AdminLayout from '../../Components/UI/Layout/AdminLayout';
import { Autocomplete, Box, Button, Container, CssBaseline, TextField } from '@mui/material';
import { useUser, useUsers } from '../../Store/store';
import { Edit, getAllUsers } from '../../http/userAPI';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const roles = [ "User", "Content Manager"];
const EditUser = () => {
    const [autovalue,setAutoValue] = useState(null);
    const [role,setRole] = useState(null);
    const {users,setUsers} = useUsers(state => ({ users: state.users, setUsers: state.setUsers}));
    const userId = useUser(state => (state.id));
    const [id,setId] = useState(null);

    useEffect(() => {
        getAllUsers(userId).then(data => setUsers(data));
    },[])

    const handleEdit = async (e) => {
        try {
            e.preventDefault();
            await Edit(id,role);
            setTimeout(() => {
                getAllUsers(userId).then(data => setUsers(data));
            },50);
            setAutoValue(null);
            setRole(null);
        } catch (e) {
            alert(e.response.data.msg);
            setAutoValue(null);
            setRole(null);
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
                    <Box component="form" sx={{ mt: 1 }}>
                        <Autocomplete
                            sx={{ width: 600 }}
                            id='users'
                            color='secondary'
                            value={autovalue}
                            options={users}
                            getOptionLabel={(option) => option.login}
                            onChange={(event,newValue) => { if (newValue != null) {setRole(newValue.role);setId(newValue._id); setAutoValue(newValue)}}}
                            renderOption={(props, option) => (
                                <Box component="li" {...props}>
                                    <AccountCircleIcon/>
                                    {option.login}  (Роль: {option.role})
                                </Box>
                            )}
                            renderInput={(params) => <TextField {...params} label="Выбор пользователя" color='secondary' margin='normal' required fullWidth />}
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
                            onClick={handleEdit}
                        >
                            Изменить
                        </Button>
                    </Box>
                </Box>
            </Container>
        </AdminLayout>
    );
};

export default EditUser;