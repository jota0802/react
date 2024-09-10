import styled from 'styled-components'

export const NavStyle = styled.section`
    width: 100%;
.sidebar_container{
    display: flex;
    align-items:center ;
    justify-content: center;
    position: absolute;
    width: 4vw;
    height: 80vh;
    margin-top: clamp(80px, 12vh, 200px);
    margin-bottom: clamp(80px, 12vh, 200px);
    margin-left: clamp(30px,4vw,60px);
    background-color: #2b7a78;
    border-radius: 2vw;
}
.sidebar{
    display: flex;
    align-items: center;
    flex-direction:column;

}
i{
    padding: 6vh;
}
`