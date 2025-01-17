import styled from 'styled-components';

export const NavStyle = styled.section`

width: 100%;

.sidebar_container {
    z-index: 3;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: clamp(24px, 8vh, 800px);
    height: 8vh;
    margin-top: clamp(80px, 14vh, 200px);
    margin-bottom: clamp(80px, 12vh, 200px);
    margin-left: clamp(30px, 6vw, 200px);
    background-color: #3aafa9;
    border-radius: 2vw;
    transition: all 0.6s ease;
}

.sidebar_container.expanded {
    height: 74vh;
    width: clamp(20px,8vh,80px);
}

.sidebar {
    z-index: 3;
    display: flex;
    justify-content: end;
    flex-direction: column;
    margin-top: 12vh;
    margin-left: 4vh;
    transition: all 0.1s ease;
    color: transparent;
}

.sidebar.expand {
    margin-top: 0;
    display: flex;
    color: black;
}

.menu {
    z-index: 2;
    transition: 0.3s ease;
    margin-right: 4vh;
    padding: 0.2vw;
    font-size: clamp(12px, 1vw, 20px);
}
.menu.expand{
    margin: 8vh 4vh 0vh 0vh;
}
.menu:hover {
    scale: 1.1;
}

#hamb {
    z-index: 4;
    display: flex;
    position: fixed;
    font-size: clamp(12px, 1vw, 20px);
    transition: all 0.6s ease;
    cursor: pointer;
}

#hamb:hover {
    scale: 1.2;
}

#hamb.expanded {
    margin-bottom: 60vh;
}

li {
    list-style: none;
}
`
