import "./addButton.scss"
import {useState} from "react";
import "./login.css"
import {Grid, Paper, Button} from "@mui/material";



function Home() {

    const handelExpense = () => {
        console.log("expense")
    }



    return (
        <div>

            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Grid item sx={{mt: 10}}>
                    <Paper className="square" elevation={3}>
                    </Paper>
                </Grid>



            </Grid>



        </div>
    );
}

export default Home;