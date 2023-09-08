import styled from "styled-components";

// export const StyledList = styled.ul`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   flex-wrap: wrap;
//   align-items: center;
//   gap: 10px;
// `

export const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
  gap: 10px;
  margin: 0 10px;
  overflow-x: scroll;

  /* width */
  ::-webkit-scrollbar {
    height: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    /* border-radius: 15px; */
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--background-btn);
    border-radius: 15px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--background-btn);
    cursor: pointer;
  }

  @media (min-width: 1024px) {
    flex-wrap: wrap;
    justify-content: flex-start;
    overflow-x: hidden;
  }
`;

export const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  min-width: 240px;
  max-width: min-content;
  height: 300px;
  padding: 17px;
  border: none;
  border-radius: 5px;
  transition:
    box-shadow 0.5s,
    filter 0.5s;

  &:hover {
    box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.2);
    cursor: pointer;
  }

  figure {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    width: 100%;
    height: 120px;
    border-bottom: 2px solid var(--bordercolor);
  }

  img {
    width: 100px;
    height: 100px;
  }

  h3 {
    font-size: var(--heading-3);
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    p {
      font-size: var(--body);
    }

    span {
      font-size: var(--headline);
    }
  }
`;

export const StyledHorizontalItem = styled.li``;
