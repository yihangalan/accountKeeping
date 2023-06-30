import "./nav-footer.css";
import Logo from "../img/Keep.png";
import {Link} from "react-router-dom";
import {useContext, useState} from "react";
import {AuthContext} from "../context/authContext";
import {Autocomplete, Input, Paper, TextField, Button} from "@mui/material";
import { yellow } from '@mui/material/colors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useNavigate} from "react-router-dom";

function Navbar(){

    // const theme = createTheme({
    //     palette: {
    //         yellow: {
    //             // This is green.A700 as hex.
    //             main: "#ff9800",
    //         },
    //     },
    // });
    const navigate = useNavigate();
    const {currentUser, logout} = useContext(AuthContext)

    const [isPopupOpen, setPopupOpen] = useState(false);
    const handleButtonClick = () => {
        if(currentUser){
            setPopupOpen(true);
        }else{
            navigate("/login");
        }

    };
    const closePopup =() =>{
        setPopupOpen(false);
    }
    const popupOptions = ["Income", "Food", "Daily","Shopping", "Transportation",
        "Entertainment", "Education", "Residence", "Travel", "Gifts", "Other"];

    return(
        <div>
            <div className="container">
                <div className="logo">
                    <img src={Logo} alt={""}></img>
                </div>
                <div className="links">
                    <Link className="link" to="/?cat=stats">
                        <h6>STATS</h6>
                    </Link>
                    <Link className="link" to="/?cat=keep">
                        <h6>KEEP</h6>
                    </Link>
                    <Link className="link" to="/?cat=chart">
                        <h6>CHART</h6>
                    </Link>
                    <span>{currentUser?.username}</span>
                    {currentUser?<span onClick={logout}>Logout</span>:<Link className="link" to="/login">Login</Link>}

                    <span className="write" onClick={handleButtonClick}>
                            Write
                    </span>
                </div>
            </div>
            {/*popup form*/}
            {isPopupOpen && (
                <Paper className="popup-container" xs={{m: 5}} sx={{m: 3}}>
                    {/*    content of popup*/}
                    <Autocomplete
                        disablePortal
                        id="form"
                        options={popupOptions}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Category" />}
                    />
                    <TextField fullWidth  id="outlined-basic" label="Amount $" variant="outlined" sx={{m: 3}} />
                    <TextField fullWidth  id="outlined-basic" label="Description" variant="filled" sx={{mb: 3}} />
                    {/*<ThemeProvider theme={theme}>*/}
                    {/*    <Button variant="outlined" color="yellow">Outlined</Button>*/}
                    {/*</ThemeProvider>*/}
                    <Button variant="outlined" color="warning">Outlined</Button>
                </Paper>
            )}
            {/*Blurred background*/}
            {isPopupOpen && <div className="overlay" onClick={closePopup}></div>}

        </div>
    )
}
export default Navbar;