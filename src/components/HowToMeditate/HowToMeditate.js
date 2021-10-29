import styled from "styled-components";
import COL from "../Colors";
import bg from "../../images/bg images/bg3.jpg";

export const MeditateContainer = styled.div`
  height: 1300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // background: ${COL.servicesBckColor};
  background: #f2e9d2;
  // background-image: url(${bg});
  // background-repeat: no-repeat;
  // background-size: auto 100%;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 1000px) {
    height: 1600px;
  }

  @media screen and (max-width: 768px) {
    height: 2600px;
  }

  @media screen and (max-width: 480px) {
    height: 2700px;
  }
`;

export const MeditateWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 50px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const MeditateCard = styled.div`
  background: ${COL.ServicesCardBckColor};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  // max-height: 340px;
  padding: 30px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;
  height: 100%;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const MeditateIcon = styled.img`
  height: 130px;
  width: 130px;
  margin-bottom: 10px;
`;

export const MeditateH1 = styled.h1`
  font-size: 2.5rem;
  color: #010606;
  margin-bottom: 32px;
  text-align: center;
  text-transform: uppercase;
  @media screen and (max-width: 480px) {
    height: 2rem;
    font-size: 1rem;
  }
  @media screen and (max-width: 380px) {
    padding-top: 50px;
  }
`;

export const MeditateH2 = styled.h2`
  font-size: 1rem;
  //   color: ${COL.SerivesH1Color};
  margin-bottom: 10px;
`;

export const MeditateP = styled.p`
  font-size: 1rem;
  text-align: center;
`;

export const MeditateDesc = styled.p`
  font-size: 24px;
  text-transform: uppercase;
  color: ##010606;
  margin-bottom: 64px;
  padding: 0 68px;

  @media screen and (max-width: 480px) {
    height: 2rem;
    font-size: 16px;
    margin-bottom: 100px;
  }
`;

export const MeditateBottomDesc = styled.p`
  font-size: 24px;
  color: #010606;
  margin-top: 20px;
  padding: 0 68px;
  width: 70%;
  @media screen and (max-width: 480px) {
    height: 2rem;
    font-size: 16px;
    margin-bottom: 250px;
    width: 100%;
  }
`;

export const MeditateBottomH1 = styled.h1`
  font-size: 2.5rem;
  color: ${COL.SerivesH1Color};
  margin-top: 32px;

  @media screen and (max-width: 480px) {
    // height: 2rem;
    font-size: 1rem;
  }
`;
