import "./nav-footer.css";
import Logo from "../img/Keep.png";
import {Link} from "react-router-dom";
import {useContext, useState} from "react";
import {AuthContext} from "../context/authContext";
import {Autocomplete, Input, Paper, TextField} from "@mui/material";


function Navbar(){

    const {currentUser, logout} = useContext(AuthContext)

    const [isPopupOpen, setPopupOpen] = useState(false);
    const handleButtonClick = () => {
        setPopupOpen(true); // 点击按钮后将弹窗设置为显示
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
                <Paper className="popup-container" xs={{m: 5}}>
                    {/*    content of popup*/}
                    <Autocomplete
                        disablePortal
                        id="form"
                        options={popupOptions}
                        sx={{ width: 300 }}
                        renderInput={(params) => <TextField {...params} label="Category" />}
                    />
                </Paper>
            )}
            {/*Blurred background*/}
            {isPopupOpen && <div className="overlay" onClick={closePopup}></div>}


        </div>
    )
}
export default Navbar;