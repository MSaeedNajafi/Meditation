import styled from "styled-components";
import img from "../../images/bg/bg3.jpg";
import COL from "../Colors";

export const PageContentainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding 0 30px;
    height: 1200px;
    position: relative;
    z-index: 1;
    background-image: url(${img});
    width: 100%;
    background-size: cover;
    background-color: rgba(0, 0, 0, 0.5);
    @media screen and (max-width: 580px) {
      height: 1500px;
    }
    @media screen and (max-width: 480px) {
      height: 1900px;
    }
    @media screen and (max-width: 380px) {
      height: 2100px;
    }
`;

export const Wrpper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${COL.formBckGround};
  padding: 50px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
  @media screen and (max-width: 500px) {
    // margin-top: 300px;
  }
`;
