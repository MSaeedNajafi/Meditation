import styled from "styled-components";
import { Link } from "react-router-dom";
import COL from "../Colors";
import img from "../../images/bg/bg2.jpg";

export const Container = styled.div`
  min-height: 800px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  // position: relative;
  // z-index: 1;
  // background-repeat: no-repeat;
  background-image: url(${img});
  width: 100%;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.5);
  // background-repeat: no-repeat;
  // background: linear-gradient(
  //   180deg,
  //   rgba(126, 136, 70, 1) 0%,
  //   rgba(255, 218, 107, 1) 100%
  // );
`;

export const AboutWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Icon = styled(Link)`
  margin-left: 32px;
  margin-top: 32px;
  text-decoration: none;
  color: ${COL.signinIconColor};
  font-weight: bold;
  font-size: 32px;

  @media screen and (max-width: 400px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`;

export const AboutContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    padding: 10px;
  }
`;

export const About = styled.div`
  background: ${COL.formBckGround};
  max-width: 800px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 40px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 32px 32px;
  }
`;

export const AboutH1 = styled.h1`
  // margin-bottom: 8px;
  font-size: 20px;
  color: ${COL.formH1Color};
  font-weight: 400;
  text-align: center;
  // padding: 18px;
  // margin-top: -50px;
`;

export const Text = styled.span`
  //   text-align: left;
  text-align: justify;
  // margin-top: 24px;
  color: ${COL.formSpanColor};
  font-size: 14px;
  padding: 5px;
`;

export const TextArea = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5px;
`;

export const ImgWrap = styled.div`
  //   max-width: 555px;
  height: 100%;
  padding: 5px;
`;

export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  border-radius: 5px;
  border: 10px solid rgb(255, 218, 107);
`;

export const AboutButton = styled(Link)`
  background: ${COL.formBtnBckColor};
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: ${COL.formBtnTextColor};
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
`;
