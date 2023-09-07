import { StyledContainer } from "./Container.style";

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <StyledContainer>{children}</StyledContainer>;
};
