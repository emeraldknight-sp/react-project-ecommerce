import styled from "styled-components";

export const StyledList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
`

export const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 0 30px;

  img {
    width: 100px;
  }

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const StyledHorizontalItem = styled.li`

`