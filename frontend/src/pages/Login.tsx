import {Button, Card, Grid, Input, Link, Paper} from "@mui/material";
import "./login.css"

function Login(){
    return(
        <div className="auth">
            <Paper elevation={2}>
                <Grid className='form' container direction="column" justifyContent="center" alignItems="center">
                    <Grid item>
                        <h2>Login</h2>
                    </Grid>
                    <Grid item sx={{ m: 3 }}>
                        <Input required color='primary' placeholder="username"/>
                    </Grid>
                    <Grid item sx={{ mb: 3 }}>
                        <Input required placeholder="password"/>
                    </Grid>
                    <Grid item sx={{ mb: 3 }}>
                        <Button variant="contained">SUBMIT</Button>
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