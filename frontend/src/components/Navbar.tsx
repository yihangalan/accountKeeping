import "./nav-footer.css";
import Logo from "../img/Keep.png";
import {Link} from "react-router-dom";


function Navbar(){
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
                    <span>Alan</span>
                    <span>Logout</span>
                    <span className="write">
                        <Link className="link" to="/write">
                            Write
                        </Link>
                    </span>

                </div>

            </div>
        </div>
    )
}
export default Navbar;