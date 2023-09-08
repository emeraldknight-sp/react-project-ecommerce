import styled from "styled-components";

export const StyledMain = styled.main`
  position: relative;
  top: 20vh;
  background-color: var(--background);
  width: 90%;
  height: 100%;
  margin: 0 auto;
  padding: 30px 0;

  @media (min-width: 768px) {
    top: 15vh;
    /* height: 85vh; */
  }

  @media (min-width: 1024px) {
    top: 10vh;
    /* height: 90vh; */
  }
`;
