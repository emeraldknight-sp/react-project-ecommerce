import styled from "styled-components"

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1;
  background-color:  #F5F5F5;
  width: 100vw;
  box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.20);
  height: 20vh;
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
    border: none;
    border-radius: 5px;
  }

  button {
    width: 20%;
    background-color: var(--background-btn);
    color: var(--color-btn);
    border: none;
    border-radius: 0 5px 5px 0;
    padding: 10px 5px;
  }
`