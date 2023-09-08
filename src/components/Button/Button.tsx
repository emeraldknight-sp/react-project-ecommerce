import { StyledButton } from "./Button.style";

interface ButtonProps {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  color?: "primary" | "secondary";
  size?: "icon" | "sm" | "md" | "lg";
  onClick?: () => void;
  className?: string;
}

export const Button = ({
  children,
  type = "button",
  color,
  size = "md",
  onClick,
  className,
}: ButtonProps) => {
  const buttonClassName = `button button--${color} button--${size} ${
    className ? className : ""
  }`;
  return (
    <StyledButton type={type} onClick={onClick} className={buttonClassName}>
      {children}
    </StyledButton>
  );
};
