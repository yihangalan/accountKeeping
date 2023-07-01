import "./addButton.scss"
import {useContext, useState} from "react";
import "./login.css"
import {Grid, Paper, Button} from "@mui/material";
import {AuthContext} from "../context/authContext";


import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import * as dayjs from "dayjs";




function Home() {
    const {currentUser} = useContext(AuthContext)

    return (
        <div>
            {currentUser?
                <div>
                    <Grid container direction="column" justifyContent="center" alignItems="center">
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer fullWidth components={['DatePicker']}>
                                <DatePicker
                                    fullWidth
                                    defaultValue={dayjs()}
                                    label={'month'}
                                    views={['month', 'year']}
                                />
                            </DemoContainer>
                        </LocalizationProvider>

                        <Paper></Paper>
                    </Grid>
                </div>

                :
                <Grid item sx={{mt: 10}}>
                    <Paper className="square" elevation={3}>
                    </Paper>
                </Grid>
            }




        </div>
    );
}

export default Home;