import { NavStyle } from "../css/NavStyle";
import { Link } from "react-router-dom";

const Nav =()=>{
    return(
        <>
        <NavStyle>
            <div className="sidebar_container">
                <div className="sidebar">
                    <i class="fi fi-rr-menu-burger"></i>
                    <Link to='/'><i class="fi fi-rr-home"></i></Link>
                    <Link to='/Sobre'><i class="fi fi-rr-user"></i></Link>
                    <Link to='/Projetos'><i class="fi fi-rr-globe"></i></Link>
                    <i class="fi fi-rr-download"></i>
                </div>
            </div>
        </NavStyle>
        </>
    )
}
export default Nav