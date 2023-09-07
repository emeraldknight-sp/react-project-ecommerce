import { BsSearch } from "react-icons/bs";
import { StyledContainer } from "../../style/global.js";
import { StyledHeader, StyledLogo, StyledSearch } from "./Header.style.js";

export const Header = () => {
  return (
    <StyledHeader>
      <StyledContainer>
        <StyledLogo>
          <img src="" width={32} height={32} alt="logotipo" />
          <span>Emerald Books</span>
        </StyledLogo>

        <StyledSearch>
          <input type="text" placeholder="Digite sua busca" />
          <button onClick={() => console.log("Oi")}>
            <BsSearch size={16} />
          </button>
        </StyledSearch>
      </StyledContainer>
    </StyledHeader>
  );
};
