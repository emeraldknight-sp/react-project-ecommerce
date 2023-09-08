import UrlLogo from "../../assets/avalon.svg";

import { StyledLogo } from "./Logo.style";

export const Logo = () => {
  return (
    <StyledLogo href="/">
      <figure className="logo-figure">
        <img
          src={UrlLogo}
          className="logo-image"
          width={32}
          height={32}
          alt="logotipo"
        />
      </figure>
      <h1 className="logo-text">Avalon`s Warehouse</h1>
    </StyledLogo>
  );
};
