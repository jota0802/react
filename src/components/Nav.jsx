import { NavStyle } from "../css/NavStyle";
import { Link } from "react-router-dom";

const Nav =()=>{
    return(
        <>
        <NavStyle>
            <div className="sidebar_container">
                    <i id='hamb'className='hamb'class="fi fi-rr-menu-burger"></i>
                <div className="sidebar">
                <li>
                    
                    <ul className="subdropright-menu">
                        <i className='icons'class="fi fi-rr-home"></i> {/*Home*/}
                    </ul>
                    <ul className="subdropright-menu">
                        <i className='icons'class="fi fi-rr-user"></i>  {/*Sobre*/}  
                    </ul>
                    <ul className="subdropright-menu">
                        <i className='icons'class="fi fi-rr-globe"></i> {/*projetos*/}
                    </ul>
                    <ul className="subdropright-menu">
                        <i className='icons'class="fi fi-rr-comment-alt"></i> {/*Contato*/}
                    </ul>
                    <ul className="subdropright-menu">
                        <i className='icons'class="fi fi-rr-download"></i> {/*curriculo*/}
                    </ul>
                </li>
                </div>
            </div>
        </NavStyle>
        </>
    )
}
export default Nav

