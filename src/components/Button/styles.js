import styled from "styled-components"

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--background-btn);
  font-weight: bolder;
  color: var(--color-btn);
  transition: filter 0.5s;
  border: 1px solid var(--background-btn);
  border-radius: ${(props) => props.search ? "0 8px 8px 0" : "8px"};
  padding: 10px;
  cursor: pointer;

  svg {
    font-size: 20px;
  }
  
  :active {
    filter: brightness(0.6);
  }
`