// eslint-disable-next-line no-unused-vars
import { BsBook, BsSearch } from "react-icons/bs";
import { StyledContainer } from "../../styles/global.js";

import Image from "../../assets/img/icons8-estudantes-32.png"

import { StyledHeader, StyledLogo, StyledSearch } from "./styles.js";

const Header = () => {
  return (
    <StyledHeader>
       <StyledContainer>

        <StyledLogo>
          {/* <BsBook size={40} /> */}
          <img src={Image} alt="Imagem" />
          <span>Emerald Books</span>
        </StyledLogo>

        <StyledSearch>
          <input type="text" placeholder="Digite sua busca"/>
          <button onClick={() => console.log("Oi")}><BsSearch size={16} /></button>
        </StyledSearch>

      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
