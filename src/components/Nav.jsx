import { NavStyle } from "../css/NavStyle";
import { Link } from "react-router-dom";

const Nav =()=>{
    return(
        <>
        <NavStyle>
            <div className="sidebar_container">
                <div className="sidebar">
                    <i className='icons'class="fi fi-rr-menu-burger"></i>
                    <i className='icons'class="fi fi-rr-home"></i>
                    <i className='icons'class="fi fi-rr-user"></i>
                    <i className='icons'class="fi fi-rr-globe"></i>
                    <i className='icons'class="fi fi-rr-download"></i>
                </div>
            </div>
        </NavStyle>
        </>
    )
}
export default Nav