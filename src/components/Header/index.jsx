import { BsBook, BsSearch } from "react-icons/bs";
import { StyledContainer } from "../../styles/global.js";

import { StyledHeader, StyledLogo, StyledSearch } from "./styles.js";

const Header = () => {
  return (
    <StyledHeader>
       <StyledContainer>

        <StyledLogo>
          <BsBook size={40} />
          <span>Kenzie Books</span>
        </StyledLogo>

        <StyledSearch>
          <input type="text" placeholder="Digite sua busca"/>
          <button><BsSearch size={16} /></button>
        </StyledSearch>

      </StyledContainer>
    </StyledHeader>
  );
};

export default Header;
