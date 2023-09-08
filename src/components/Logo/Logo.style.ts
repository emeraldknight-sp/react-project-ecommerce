import styled from "styled-components";

export const StyledLogo = styled.a`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;

  color: var(--gray-500);
  text-decoration: none;

  .logo-text {
    font-size: var(--text-md);
    font-family: var(--tipographyMontserrat);
    font-weight: 600;
    line-height: var(--line-height-md);
  }
`;
