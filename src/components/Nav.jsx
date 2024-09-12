import { NavStyle } from "../css/NavStyle";


const sidebar_container = document.querySelector('sidebar_container');
const sidebar = document.querySelector('sidebar');
const menu = document.querySelector('menu');

const abrir =()=> {
    sidebar_container.classList.toggle('open');
    sidebar.classList.toggle('open');
    menu.classList.toggle('open');
}

const fechar=()=> {
    sidebar_container.classList.toggle('close');
    sidebar.classList.toggle('close');
    menu.classList.toggle('close');
}

let abre_fecha = 1

const burguer=()=>{
    if (abre_fecha == 1){
        abrir();
        abre_fecha = 2;
    }
    else{
        fechar();
        abre_fecha = 1;
    }
}

const Nav =()=>{
    return(
        <>
        <NavStyle>
        <div className="sidebar_container">
                    <i id='hamb'className='hamb'class="fi fi-rr-menu-burger" onClick={burguer()}></i>
                <div className="sidebar" id="sidebar">
                <li>
                    
                    <ul id="menu">
                        <i className='icons'class="fi fi-rr-home"></i> {/*Home*/}
                    </ul>
                    <ul id="menu">
                        <i className='icons'class="fi fi-rr-user"></i>  {/*Sobre*/}  
                    </ul>
                    <ul id="menu">
                        <i className='icons'class="fi fi-rr-globe"></i> {/*projetos*/}
                    </ul>
                    <ul id="menu">
                        <i className='icons'class="fi fi-rr-comment-alt"></i> {/*Contato*/}
                    </ul>
                    <ul id="menu">
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



