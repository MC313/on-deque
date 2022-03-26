import styled from "@emotion/styled";

import { colors, fonts, radius } from "@styles";

export const Button = ({
  children,
  primary,
  size,
  type = "button",
  ...props
}: ButtonProps) => (
  <StyledButton type={type} {...props}>
    {children}
  </StyledButton>
);

const StyledButton = styled.button<ButtonProps>`
  background: ${colors.primary};
  border-color: ${colors.primary};
  border-radius: ${radius.medium};
  border-width: 2px;
  box-shadow: 0px 4px 15px ${colors.lightPurple};
  color: ${colors.white};
  fontsize: ${fonts.medium};
  height: 50px;
  margin: ${({ align }) => setAlignment(align)};
  opacity: ${({ disabled }) => (disabled ? 0.7 : 1)};
  transition: background 0.4s ease;
  width: ${({ size }) => (size ? setSize(size) : "94%")};
  & > svg {
    fill: ${colors.black};
  }
`;

const setAlignment = (alignment: Alignment | undefined) => {
  switch (alignment) {
    case "bottom":
      return "auto auto 0px auto";
    case "top":
      return "0px auto auto auto";
    default:
      return "0 auto";
  }
};

const setSize = (size: ButtonSize | undefined) => {
  switch (size) {
    case "small":
      return "125px";
    case "medium":
      return "200px";
    case "large":
      return "400px";
    default:
      return "200px";
  }
};

type Alignment = "top" | "bottom";

type ButtonSize = "small" | "medium" | "large";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "styles"> {
  align?: Alignment;
  primary?: boolean;
  size?: ButtonSize;
}
