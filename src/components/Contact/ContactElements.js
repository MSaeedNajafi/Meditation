import styled from "styled-components";
import { Link } from "react-router-dom";
import COL from "../Colors";
import img from "../../images/bg/bg1.jpg";

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

export const FormWrap = styled.div`
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
    margin-left: 0;
    text-align: center;
  }
`;

export const FormCotent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: 400px) {
    padding: 10px;
  }
`;

export const Form = styled.form`
  background: ${COL.formBckGround};
  max-width: 400px;
  height: auto;
  width: 100%;
  z-index: 1;
  display: grid;
  margin: 0 auto;
  padding: 40px 32px;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 400px) {
    padding: 84px 32px;
  }
`;

export const FormH1 = styled.h1`
  // margin-bottom: 8px;
  font-size: 20px;
  color: ${COL.formH1Color};
  font-weight: 400;
  text-align: center;
  // padding: 18px;
  // margin-top: -50px;
`;

export const FormP = styled.h1`
  // margin-bottom: 8px;
  font-size: 14px;
  color: ${COL.formH1Color};
  font-weight: 400;
  text-align: center;
  // padding: 18px;
  // margin-top: -50px;
`;

export const FormLabel = styled.label`
  margin-bottom: 8px;
  font-size: 14px;
  color: ${COL.formH1Color};
`;

export const FormInput = styled.input`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
`;

export const FormButton = styled.button`
  background: ${COL.formBtnBckColor};
  padding: 16px 0;
  border: none;
  border-radius: 4px;
  color: ${COL.formBtnTextColor};
  font-size: 20px;
  cursor: pointer;
  font-weight: bold;
`;

export const Text = styled.span`
  text-align: center;
  // margin-top: 24px;
  color: ${COL.formSpanColor};
  font-size: 14px;
  padding: 10px;
`;

export const TextArea = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

export const FormInputTextArea = styled.textarea`
  padding: 16px 16px;
  margin-bottom: 32px;
  border: none;
  border-radius: 4px;
  height: 10rem;
  @media screen and (max-width: 480px) {
    height: 6rem;
  }
`;

export const SpanElem = styled.span`
  font-size: 14px;
  @media screen and (max-width: 400px) {
    display: none;
  }
`;
