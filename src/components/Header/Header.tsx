import { FiMenu } from "react-icons/fi";
import { HeaderContainer, StyledHeader } from "./Header.style";

import { Button } from "../Button";
import { Logo } from "../Logo";

export const Header = () => {
  return (
    <StyledHeader>
      <HeaderContainer>
        <Logo />
        <Button type="button" size="icon" onClick={() => console.log("Oi")}>
          <FiMenu size={24} />
        </Button>
      </HeaderContainer>
    </StyledHeader>
  );
};
