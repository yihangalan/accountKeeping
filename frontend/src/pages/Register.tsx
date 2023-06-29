import {Button, Grid, Input, Link, Paper} from "@mui/material";
import "./login.css"
import {useState} from "react";
import axios from "axios";

function Register(){
    const backend_url = "http://localhost:3000/api"

    const [inputs, setInputs] = useState({
        username: '',
        email: '',
        password: '',
    })

    const handleChange = (e: any) => {
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async e =>{
        //used to prevent refreshing the page
        e.preventDefault();
        try{
            const res = await axios.post(backend_url + "/auth/register", inputs)
            console.log(res)
        }catch (err) {
            console.log(err)
        }
    }


    return(
        <div className="auth">
            <Paper elevation={2}>
                <Grid className='form' container direction="column" justifyContent="center" alignItems="center">
                    <Grid item>
                        <h2>Register</h2>
                    </Grid>
                    <Grid item sx={{ m: 3 }}>
                        <Input required color='primary' placeholder="email" name="email" onChange={handleChange}/>
                    </Grid>
                    <Grid item sx={{ mb: 3 }}>
                        <Input required color='primary' placeholder="username" name="username" onChange={handleChange}/>
                    </Grid>
                    <Grid item sx={{ mb: 3 }}>
                        <Input required placeholder="password" name="password" onChange={handleChange}/>
                    </Grid>
                    <Grid item sx={{ mb: 3 }}>
                        <Button onClick={handleSubmit} variant="contained">SUBMIT</Button>
                    </Grid>
                    <Grid item sx={{ mb: 3 }}>
                        <span>Don't you have an account?<Link href="/login">Login</Link>
                        </span>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}
export default Register;