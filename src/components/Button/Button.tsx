import { StyledButton } from "./Button.style";

export const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <StyledButton onClick={() => console.log("Hello World")}>
      {children}
    </StyledButton>
  );
};
