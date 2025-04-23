import styled from 'styled-components';

export const NavStyle = styled.section`

width: 100%;


.logo {
    width: clamp(50px, 15vw, 240px); /* Mantém a logo flexível */
    margin-right: clamp(8px, 16vw, 300px);
}
.h1{
    margin-right: clamp(8px,12vw, 240px); /* Margem controlada */
    font-size: clamp(8px, 0.6vw, 20px);
    font-weight:700;
}
.nav{

}
.sidebar_container {
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    height: clamp(30px,4vw,100px);;
    width: clamp(30px, 8vh, 80px);
    margin-top: clamp(20px, 8vh, 200px); //da a altura do menu em relação ao topo
    margin-bottom: clamp(20px, 8vh, 200px);
    margin-left: clamp(30px, 4vw, 200px);
    background: linear-gradient(75deg, #a2e2ee4c, #7573eb47);
    border-radius: 1vw;
    transition: all 0.6s ease;
    opacity: 0.96;
    border: 4px solid #ffffff7f;
    
}

.sidebar_container.expanded {
    height: clamp(300px,36vw,800px);
    width: clamp(80px,10vw,400px);
    background: linear-gradient(75deg, #a2e2ee4c, #7573eb47);
    border-radius: 1.2vw;
}

.sidebar {
    z-index: 3;
    display: flex;
    flex-direction: column;
    color: transparent;
    pointer-events: none;
    transition: all 0.2s ease-in; //em ease-in a nao mostra o menu vindo do topo do site, pois vai mais rapido ao ponto 0 antes de aparecer na tela
    //text-transform: uppercase;
}

.sidebar.expand {
    display: flex;
    color: #f8f5f5e4;
    pointer-events: auto;
    text-transform: uppercase;
}

.menu {
    z-index: 2;
    padding-top: 1vw; //altura dos componentes 
    font-size: clamp(6px, 0.6vw, 20px);
    transition: 0.2s ease-in-out;
    display: none;
}
.menu.expand{
    margin-top: clamp(20px,3vw,80px);
    font-size: clamp(8px, 1vw, 20px);
    letter-spacing: clamp(1px,0.2vh,3px);
    font-weight: 700;
    padding: 0.4vw; //altura dos componentes 
    display: block;
}

#hamb {
    z-index: 4;
    display: flex;
    position: fixed;
    width: clamp(20px,2.4vw,60px);
    font-size: clamp(12px, 0.6vw, 20px);
    transition: all 0.6s ease;
    cursor: pointer;
}

#hamb:hover {
    scale: 1.1;
}

#hamb.expanded {
    margin-bottom: clamp(240px,31vw,1000px);
    rotate: 360deg;
}

li {
    display: flex;
    flex-direction: column;
    list-style: none;
    
}
a{
    color: inherit;
    text-decoration: none;
    
}`