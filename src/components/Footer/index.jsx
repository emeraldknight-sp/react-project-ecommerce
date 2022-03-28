import { StyledContainer } from "../../styles/global";
import { StyledContacts, StyledFooter } from "./styles";

import { FaTwitch, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
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
  )
}

export default Footer;