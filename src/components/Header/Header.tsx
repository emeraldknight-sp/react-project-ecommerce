import { BsSearch } from "react-icons/bs";
import { Container } from "../Container";
import { StyledHeader, StyledLogo, StyledSearch } from "./Header.style";

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
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
      </Container>
    </StyledHeader>
  );
};
