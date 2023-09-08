import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;

  h1 {
    font-size: 30px;
  }

  button {
    background-color: purple;
    height: 80px;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    color: white;
  }
`;
