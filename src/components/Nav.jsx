import { useState } from 'react';
import { NavStyle } from "../css/NavStyle";

const Nav =()=>{
    
    const [Expandir, setExpandir] = useState(false);

    // Função para alternar o estado expandido
    const toggleMenu = () => {
        setExpandir(!Expandir); // ! no comeco Alterna entre expandido e não expandido 
    };

    return(
        <NavStyle>
            <div className={`sidebar_container ${Expandir ? 'expanded' : ''}`}> {/*? baseado no valor de Expandir (true : false) atribue uma nome a sidebar_conatiner */} 
                <i
                    id="hamb"
                    className={`hamb fi fi-rr-menu-burger ${Expandir ? 'expanded' : ''}`}
                    onClick={toggleMenu} // Chama a função ao clicar
                ></i>

                <div className={`sidebar ${Expandir ? 'expand' : ''}`} id="sidebar">
                    <li>
                        <ul className={`menu ${Expandir ? 'expand' : ''}`}>
                            <i className="icons fi fi-rr-home"></i> {/* Home */}
                        </ul>
                        <ul className={`menu ${Expandir ? 'expand' : ''}`}>
                            <i className="icons fi fi-rr-user"></i>  {/* Sobre */}  
                        </ul>
                        <ul className={`menu ${Expandir ? 'expand' : ''}`}>
                            <i className="icons fi fi-rr-globe"></i> {/* Projetos */}
                        </ul>
                        <ul className={`menu ${Expandir ? 'expand' : ''}`}>
                            <i className="icons fi fi-rr-comment-alt"></i> {/* Contato */}
                        </ul>
                        <ul className={`menu ${Expandir ? 'expand' : ''}`}>
                            <i className="icons fi fi-rr-download"></i> {/* Currículo */}
                        </ul>
                    </li>
                </div>
            </div>
        </NavStyle>
    )
}
export default Nav



