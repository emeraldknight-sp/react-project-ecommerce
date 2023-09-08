import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--white);
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.2);
  padding: 1rem 0;

  width: 100vw;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  width: 90vw;
  margin: 0 auto;
`;
