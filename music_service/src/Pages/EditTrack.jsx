import React, { useEffect, useState } from 'react';
import ManagerLayout from '../Components/UI/Layout/ManagerLayout';
import { useParams } from 'react-router-dom';
import StepWrapper from '../Components/StepWrapper';
import { Button, Grid, TextField } from '@mui/material';
import FileUpload from '../Components/FileUpload';
import { CreateAudio, CreateImage, getOne } from '../http/trackAPI';
import { Audio_URL, Image_URL } from '../http';
import { useNavigate } from 'react-router-dom';
const EditTrack = () => {
    const [activeStep, setActiveStep] = useState(0);
    const {id} = useParams();

    console.log(id);
    const [name, setName] = useState("");
    const [picture, setPicture] = useState(null);
    const [audio, setAudio] = useState(null);
    const [track,setTrack] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const response = getOne(id);
        console.log(response);
    }, [])

    const next = () => {
        if (activeStep !== 2) {
            setActiveStep(prev => prev + 1)
        } else {
            CreateImage(picture);
            CreateAudio(audio);
            try {
                EditTrack(name,`${Image_URL}${picture.name}`,`${Audio_URL}${audio.name}`);
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
                        value={track}
                        onChange={e => setName(e.target.value)}
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

export default EditTrack;