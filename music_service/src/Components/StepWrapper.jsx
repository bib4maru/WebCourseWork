import { Card, Container, Grid, Step, StepLabel, Stepper } from '@mui/material';
import React from 'react';

const steps = ["Информация о треке","Загрузите обложку","Загрузите трек"]
const StepWrapper = ({activeStep,children}) => {
    return (
        <Container>
            <Stepper activeStep={activeStep} sx={{mt: "70px", color:"red"}}>
                {steps.map((step,index) => 
                    <Step
                        
                        key={index}
                        completed={activeStep > index}
                        sx={{
                            '& .MuiStepLabel-root .Mui-completed': {
                              color: 'secondary.dark', 
                            },
                            '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
                              {
                                color: 'grey.500', 
                              },
                            '& .MuiStepLabel-root .Mui-active': {
                              color: 'secondary.main', 
                            },
                            '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
                              {
                                color: 'common.white',
                              },
                            '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                              fill: 'black', 
                            },
                          }}
                    >
                        <StepLabel color='secondary'>{step}</StepLabel>
                    </Step>
                )}
            </Stepper>
            <Grid container justifyContent="center" sx={{margin: "70px 0", height: "270px"}}>
                <Card sx={{width: "700px"}}>
                    {children}
                </Card>
            </Grid>
        </Container>
    );
};

export default StepWrapper;