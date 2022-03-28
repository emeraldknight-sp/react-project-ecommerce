import styled from "styled-components";

export const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  gap: 5px;
  background-color: var(--white);
  width: 100%;
  height: 20vh;
  position: relative;
  top: 20vh;
  
  h3 {
    font-size: var(--heading-3);
    text-align: center;
    margin: 10px auto;
  }

  @media (min-width: 768px) {
    top: 15vh;
    height: 25vh;

    h3 {
      font-size: var(--heading-2);
      text-align: center;
      margin: 10px auto;
    }
  }

  @media (min-width: 1024px) {
    top: 10vh;
    height: 30vh;
  }
`

export const StyledContacts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 5px;
  width: 100px;
  height: 80px;

  a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
    color: var(--gray-3);
    text-decoration: none;
  }
`