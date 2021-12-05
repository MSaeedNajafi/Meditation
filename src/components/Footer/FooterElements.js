import styled from "styled-components";
import { Link } from "react-router-dom";

import COL from "../Colors";

export const FooterContainer = styled.footer`
  background-color: ${COL.footerContainerBckColor};
  position: relative;
  z-index: 1;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1100px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinksItems = styled.div`
  // display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: center;
  width: 160px;
  box-sizing: border-box;
  color: ${COL.footerLinkItemsColor};

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
`;

export const FooterLink = styled(Link)`
  color: ${COL.footerLinkItemsColor};
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;

  &:hover {
    color: ${COL.FooterLinkOnHoverColor};
    transition: 0.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  // margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: ${COL.socialMediaIconColor};
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  align-items: center;
  // margin-bottom: 16px;
  font-weight: bold;
  @media screen and (max-width: 820px) {
    margin-bottom: 15px;
  }
`;

export const WebsiteRights = styled.small`
  color: ${COL.footerSocialMediaTextColor};
  // margin-bottom: 16px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 240px;
`;

export const SocialIconLink = styled.a`
  color: ${COL.footerSocialMediaTextColor};
  font-size: 24px;
  //   margin-left: 25px;
  padding: 5px 5px;
`;
