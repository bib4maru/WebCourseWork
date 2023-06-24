import React, { useEffect, useState } from 'react';
import ManagerLayout from '../Components/UI/Layout/ManagerLayout';
import StepWrapper from '../Components/StepWrapper';
import { Autocomplete, Button, Grid, TextField } from '@mui/material';
import { useMusicians } from '../Store/store';
import {shallow} from 'zustand/shallow';
import { getAllMusicians } from '../http/musicianAPI';
import FileUpload from '../Components/FileUpload';
import { CreateAudio, CreateImage, createTrack } from '../http/trackAPI';
import { Audio_URL, Image_URL, api } from '../http';
import { useNavigate } from 'react-router-dom';

const CreateTrack = () => {
    const {musicians,setMusicians} = useMusicians (state => ({musicians: state.musicians, setMusicians: state.setMusicians}),shallow);
    const [activeStep, setActiveStep] = useState(0);
    const [picture, setPicture] = useState(null);
    const [audio, setAudio] = useState(null);
    const [name, setName] = useState("");
    const [musician,setMusician] = useState(""); 
    const navigate = useNavigate();

    useEffect(() => {
        getAllMusicians().then(data => setMusicians(data))
    },[])

    const next = () => {
        if (activeStep !== 2) {
            setActiveStep(prev => prev + 1)
        } else {
            CreateImage(picture);
            CreateAudio(audio);
            try {
                createTrack(name,`${Image_URL}${picture.name}`, `${Audio_URL}${audio.name}`,musician);
            } catch (e) {
                alert(e.response.data.msg);
            }
            navigate("/tracks/main");
        }
    }

    const back = () => {
        setActiveStep(prev => prev - 1);
    }
    return (
        <ManagerLayout>
            <StepWrapper activeStep={activeStep}>
                {activeStep === 0 && 
                <Grid container direction={"column"} style={{padding: 20}}>
                  <TextField
                    style={{marginTop: 10}}
                    color='secondary'
                    label="Название трека"
                    required
                    value={name}
                    onChange={e => setName(e.target.value)}
                  />
                  <Autocomplete
                    style={{marginTop: 10}}
                    options={musicians}
                    onChange={(event,newValue) => { if (newValue != null) setMusician(newValue.Username)}}
                    getOptionLabel={(option) => `${option.Username}`}
                    renderInput={(params) => <TextField {...params} label="Выбор исполнителя" color='secondary' margin='normal' required fullWidth />}
                  />  
                </Grid>
                }
                {activeStep === 1 && 
                    <FileUpload setFile={setPicture} accept="image/*">
                        <Button color='secondary'>Загрузить обложку</Button>
                    </FileUpload>

                }
                {activeStep === 2 &&
                <FileUpload setFile={setAudio} accept="audio/*">
                    <Button color='secondary'>Загрузить аудио</Button>
                </FileUpload>
                }
            </StepWrapper>
            <Grid container justifyContent='space-between'>
                <Button disabled={activeStep === 0} color='secondary' sx={{ml: "70px"}} onClick={back}>Назад</Button>
                <Button color='secondary' sx={{mr: "70px"}} onClick={next}>Далее</Button>
            </Grid>
        </ManagerLayout>
    );
};

export default CreateTrack;