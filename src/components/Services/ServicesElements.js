import styled from "styled-components";
import COL from "../Colors";
import bg from "../../images/bg images/bg3.jpg";

export const ServicesContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${COL.servicesBckColor};
  // background-image: url(${bg});
  // background-repeat: no-repeat;
  // background-size: 100% 100%;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 1000px) {
    height: 1000px;
  }

  @media screen and (max-width: 768px) {
    height: 1300px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1100px;
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

export const ServicesCard = styled.div`
  // background: ${COL.ServicesCardBckColor};
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 340px;
  // padding: 30px;
  // box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const ServicesIcon = styled.img`
  height: 200px;
  width: 200px;
  margin-bottom: 10px;
  border-radius: 150px;
  border: 5px solid #ffda6b;
`;

export const ServicesH1 = styled.h1`
  font-size: 1.5rem;
  color: #010606;
  margin-bottom: 32px;
  text-transform: uppercase;
  text-align: center;

  @media screen and (max-width: 1000px) {
    height: 2rem;
    font-size: 1.5rem;
  }

  @media screen and (max-width: 1000px) {
    height: 2rem;
    font-size: 1rem;
  }

  // @media screen and (max-width: 480px) {
  //   height: 2rem;
  //   font-size: 0.75rem;
  // }
`;

export const ServicesH2 = styled.h2`
  font-size: 1.5rem;
  color: #010606;
  margin-bottom: 10px;
`;

export const ServicesP = styled.p`
  font-size: 1.3rem;
  text-align: left;
  color: #010606;
`;

export const ServicesP1 = styled.p`
  font-size: 1.3rem;
  text-align: center;
  color: #010606;
`;
