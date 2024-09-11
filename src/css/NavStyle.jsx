import styled from 'styled-components'

export const NavStyle = styled.section`
    width: 100%;
.sidebar_container{
    display: flex;
    align-items:center ;
    justify-content: center;
    position: absolute;
    width: clamp(24px,4vw,800px);
    height: 80vh;
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
}
i{
    transition: 0.4s ease-in-out;
    padding: 6vh;
    font-size: clamp(12px,1vw,20px);
}
i:hover{
    scale: 1.2;
}

@keyframes abrir {
    from {
        margin-right: 14vw;
    }
    to {
        margin-right: 0;
    }
}
`