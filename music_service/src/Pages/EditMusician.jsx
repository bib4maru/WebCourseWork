import React, { useEffect, useState } from 'react';
import { useMusicians } from '../Store/store';
import {shallow} from 'zustand/shallow';
import { Edit, getAllMusicians } from '../http/musicianAPI';
import {  Box, Button, Container, CssBaseline, TextField, Autocomplete } from '@mui/material';
import ManagerLayout from '../Components/UI/Layout/ManagerLayout';
const EditMusician = () => {
    const {musicians,setMusicians} = useMusicians (state => ({musicians: state.musicians, setMusicians: state.setMusicians}),shallow);
    const [id,setId] = useState(null);
    const [value,setValue] = useState("");
    const [Firstname,setFirstname] = useState("");
    const [Surname,setSurname] = useState("");

    useEffect(() => {
        getAllMusicians().then(data => setMusicians(data))
    },[])

    const HandleEdit = async (e) => {
        try {
            e.preventDefault();
            const response = await Edit(id,value,Firstname,Surname);
            await getAllMusicians().then(data => setMusicians(data));
            setValue("");
            setFirstname("");
            setSurname("");
            setId(null);
        } catch (e) {
            alert(e.response.data.msg);
            setValue("");
            setFirstname("");
            setSurname("");
            setId(null);
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
                <Box component="form" sx={{ mt: 1 }}>
                    <Autocomplete
                        sx={{ width: 600 }}
                        id='musicians'
                        color='secondary'
                        options={musicians}
                        getOptionLabel={(option) => option.Username}
                        onChange={(event,newValue) => { if (newValue != null) {setId(newValue._id);setValue(newValue.Username);
                            setFirstname(newValue.Firstname);setSurname(newValue.Surname);
                        
                        }}}
                        renderInput={(params) => <TextField {...params} label="Выбор исполнителя" color='secondary' margin='normal' required fullWidth />}
                    />
                    <TextField
                        color='secondary'
                        margin='normal'
                        required
                        fullWidth
                        name='Username'
                        label='Псевдоним'
                        value={value}
                        onChange={e =>setValue(e.target.value)}
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
                        onClick={HandleEdit}
                    >
                        Изменить
                    </Button>
                </Box>
            </Box>
        </Container>
    </ManagerLayout>
    );
};

export default EditMusician;