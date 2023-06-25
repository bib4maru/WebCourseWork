import React, { useEffect, useState } from 'react';
import ManagerLayout from '../../Components/UI/Layout/ManagerLayout';
import { Autocomplete, Avatar, Box, Button, Container, CssBaseline, TextField, Typography } from '@mui/material';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import { useMusicians } from '../../Store/store';
import {shallow} from 'zustand/shallow';
import { Delete, getAllMusicians } from '../../http/musicianAPI';

const DeleteMusician = () => {
    const {musicians,setMusicians} = useMusicians (state => ({musicians: state.musicians, setMusicians: state.setMusicians}),shallow);
    const [id,setId] = useState(null);

    const handleDelete = async (e) => {
        try {
            e.preventDefault();
            await Delete(id);
            await getAllMusicians().then(data => setMusicians(data));
        } catch (e) {
            alert(e.response.data.msg);
        }
    }

    useEffect(() => {
        getAllMusicians().then(data => setMusicians(data))
    },[])
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
                    <PersonRemoveIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Удаление исполнителя
                </Typography>
                <Box component="form" sx={{ mt: 1 }}>
                    <Autocomplete
                        sx={{ width: 600 }}
                        id='musicians'
                        color='secondary'
                        options={musicians}
                        getOptionLabel={(option) => option.Username}
                        onChange={(event,newValue) => { if (newValue != null) setId(newValue._id)}}
                        renderInput={(params) => <TextField {...params} label="Выбор исполнителя" color='secondary' margin='normal' required fullWidth />}
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
        </ManagerLayout>
    );
};

export default DeleteMusician;