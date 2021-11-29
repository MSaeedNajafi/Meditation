import styled from "styled-components";
import { Link } from "react-router-dom";
import COL from "../Colors";
import img from "../../images/bg/bg3.jpg";
import me from "../../images/self/aboutme.png";

export const Container = styled.div`
  min-height: 800px;
  // position: fixed;
  padding-bottom: 50px;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  padding-top: 100px;
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
  color: #0b0b0b;
  font-weight: bold;
  font-size: 32px;

  @media screen and (max-width: 400px) {
    margin-left: 0;
    text-align: center;
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
  font-size: 24px;
  color: ${COL.formH1Color};
  font-weight: bold;
  text-align: center;
  // padding: 18px;
  // margin-top: -50px;
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
  float: left;
`;

export const Img = styled.img`
  float: left;
  width: 50%;
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
  cursor: pointe7r;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  // float: right;
`;

export const SpanElem = styled.span`
  font-size: 14px;
  @media screen and (max-width: 400px) {
    display: none;
  }
`;

export const TextOverImgWrapper = styled.div`
  padding: 20px;
`;

export const Text = styled.span`
  text-align: justify;
  // margin-top: 24px;

  color: ${COL.formSpanColor};
  font-size: 20px;
  padding: 5px;
`;

export const TextInWrapper = styled.p`
  // text-align: justify;
  color: ${COL.formSpanColor};
  font-size: 20px;
`;

export const ImgOverText = styled.img`
  float: left;
  width: 50%;
  border-radius: 5px;
  border: 10px solid rgb(255, 218, 107);
  margin-right: 20px;
`;

export const Emoji = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 20px;
  // margin-left: 15px;
  float: right;

  // @media screen and (max-width: 768px) {
  //   width: 35px;
  //   height: 25px;
  //   margin-right: 5px;
  // }
`;
