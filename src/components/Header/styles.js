import styled from "styled-components"

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;
  background-color: var(--background);
  width: 100%;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.20);
  height: 20vh;

  @media (min-width: 768px) {
    height: 15vh;
  }

  @media (min-width: 1024px) {
    height: 10vh;
  }
`
export const StyledLogo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;

  span {
    font-size: var(--heading-1);
  }
`

export const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  input {
    width: 80%;
    padding: 10px;
    border: 1px solid var(--bordercolor);
    border-radius: 5px 0 0 5px;
    outline: none;
  }

  button {
    width: 20%;
    background-color: var(--background-btn);
    color: var(--color-btn);
    border: none;
    border-radius: 0 5px 5px 0;
    padding: 10px 5px;
    transition: filter 0.5s, background-color 0.5s;
    cursor: pointer;

    :active {
      filter: brightness(0.6);
    }

    @media (min-width: 1024px) {
      :hover {
        background-color: var(--gray-3);
      }
    }
  }
`