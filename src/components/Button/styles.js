import styled from "styled-components"

export const StyledButton = styled.button`
  background-color: ${(props) => props.color === "Comprar" ? "green" : "red" };
  font-size: 20px;
  height: 50px;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px;
  cursor: pointer;

  transition: filter 0.5s;

  :active {
    filter: brightness(0.6);
  }
`

export const StyledDiv = styled.div`
  display: flex;
  background-color: black;
  width: 500px;
`