import styled from 'styled-components'

export const NavStyle = styled.section`
    width: 100%;
.sidebar_container{
    display: flex;
    align-items:center ;
    justify-content: center;
    position: absolute;
    width: clamp(24px,8vh,800px);
    height: 8vh; //mudando para de 74 para 8
    margin-top: clamp(80px, 12vh, 200px);
    margin-bottom: clamp(80px, 12vh, 200px);
    margin-left: clamp(30px,6vw,200px);
    background-color: #3aafa9;
    border-radius: 2vw;
}
.sidebar{
    display: flex;
    align-items: center;
    flex-direction:column;
    margin-left:2vw;
    display: none; //display block --> none
}
#menu{
    transition: 0.2s ease-in-out;
    margin: 8vh 4vh 0vh 0vh;
    padding: .2vw;
    font-size: clamp(12px,1vw,20px);
}
#menu:hover{
    scale: 1.1;
}
#hamb{
    display: flex;
    position: fixed;
    // margin-bottom: 60vh; ---------comentado
    transition: 0.6s ease-in-out;
    font-size: clamp(12px,1vw,20px);
}
#hamb:hover{
    scale: 1.2;
}
li{
    list-style: none;
}


//---------------- animacoes ----------------------------//
//abrir

@keyframes abrir{
    0%{
        height: 0vh;
    }
    100%{
        height: 74vh;
    }
}
@keyframes fixar{
    100%{

    }
}
.sidebar_container.open{

}
.sidebar.open{

}
#menu.open{
    
}
#hamb.open{
    margin-bottom: 60vh;
}

//fechar

@keyframes fechar{

}
@keyframes desfixar{
    
}
.sidebar_container.close{
    
}
.sidebar.open.close{
    
}
#menu.open.close{
    
}
#hamb.close{
    
}

`
