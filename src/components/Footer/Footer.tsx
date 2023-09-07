import { StyledContainer } from "../../style/global";
import { StyledContacts, StyledFooter } from "./Footer.style";

import { FaTwitch, FaInstagram, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer>
        <h3>Designed by EmeraldKnight inc.</h3>
        <StyledContacts>
          <a
            href="https://www.twitch.tv/emeraldknightofc"
            target="_blank"
            rel="noreferrer"
          >
            <FaTwitch /> Twitch
          </a>
          <a
            href="https://www.instagram.com/_emeraldesign/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram /> Instagram
          </a>
          <a
            href="https://www.linkedin.com/in/david-almeida-6069351ab/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin /> Linkedin
          </a>
        </StyledContacts>
      </StyledContainer>
    </StyledFooter>
  );
};
