import {Button, Alert, Grid, Input, Link, Paper} from "@mui/material";
import "./login.css"
import {useContext, useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../context/authContext";

function Login(){
    const backend_url = "http://localhost:3000/api"

    const [inputs, setInputs] = useState({
        username: '',
        password: '',
    })
    const [errors, setErrors] = useState(null)
    const navigate = useNavigate();

    const {login} = useContext(AuthContext);
    // console.log(currentUser)

    useEffect(() => {
        // 延迟执行的函数
        const delayedFunction = () => {
            setErrors(null);
        };

        // 延迟时间，单位为毫秒
        const delay = 3000;

        // 使用 setTimeout 延迟执行函数
        const timeoutId = setTimeout(delayedFunction, delay);

        // 在组件销毁时清除定时器
        return () => clearTimeout(timeoutId);
    }, [errors]);


    const handleChange = (e: any) => {
        setInputs(prev=>({...prev, [e.target.name]: e.target.value}))
    }

    const handleSubmit = async e =>{
        //used to prevent refreshing the page
        e.preventDefault();
        try{
            await login(inputs);
            navigate("/");
        }catch (err) {
            setErrors(err.response.data)
        }
    }



    return(
        <div className="auth">
            <Paper elevation={2}>
                <Grid className='form' container direction="column" justifyContent="center" alignItems="center">
                    <Grid item>
                        <h2>Login</h2>
                    </Grid>
                    <Grid item sx={{ m: 3 }}>
                        <Input required color='primary' name="username" placeholder="username" onChange={handleChange}/>
                    </Grid>
                    <Grid item sx={{ mb: 3 }}>
                        <Input required name="password" placeholder="password" onChange={handleChange}/>
                    </Grid>
                    <Grid item sx={{ mb: 3 }}>
                        <Button onClick={handleSubmit} variant="contained">SUBMIT</Button>
                    </Grid>
                    <Grid item sx={{ mb: 3 }}>
                        {errors && <Alert variant="outlined" severity="error">{errors}</Alert>}
                    </Grid>
                    <Grid item sx={{ mb: 3 }}>
                        <span>Don't you have an account?<Link href="/register">Register</Link>
                        </span>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}
export default Login;