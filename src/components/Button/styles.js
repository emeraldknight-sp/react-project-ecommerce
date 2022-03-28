import styled from "styled-components"

export const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color === "Adicionar" ? "var(--background-btn)" : "var(--background-btn--negative)" };
  font-size: 20px;
  height: 50px;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;

  transition: background-color 0.5s, filter 0.5s;

  :active {
    filter: brightness(0.6);
  }

  @media (min-width: 1024px) {
    :hover {
      background-color: var(--gray-3);
    }
  }
`

export const StyledDiv = styled.div`
  display: flex;
  background-color: black;
  width: 500px;
`