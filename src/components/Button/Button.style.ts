import styled from "styled-components";

export const StyledButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;

  background-color: transparent;

  border: none;
  border-radius: 8px;
  padding: 8px;
  cursor: pointer;

  transition:
    background-color 0.5s,
    filter 0.5s;

  &.button--primary {
    background-color: var(--primary-color);
    color: var(--gray-500);
  }

  &.button--secondary {
    background-color: var(--secondary-color);
    color: var(--gray-500);
  }

  &.button--icon {
    width: 40px;
    height: 40px;
    padding: 8px;
  }

  &.button--sm {
  }

  &.button--md {
  }

  &.button--lg {
  }

  :active {
    filter: brightness(0.9);
  }

  @media (min-width: 1024px) {
    &.button--primary:hover {
      color: var(--green-300);
    }

    &.button--secondary:hover {
      color: var(--gray-500);
    }
  }
`;
