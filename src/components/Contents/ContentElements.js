import styled from "styled-components";
import img from "../../images/bg/bg3.jpg";

export const PageContentainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding 0 30px;
    height: 1000px;
    position: relative;
    z-index: 1;
    background-image: url(${img});
    width: 100%;
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.5);
    
`;
