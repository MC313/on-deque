import styled from "@emotion/styled";

import { colors, fonts, padding, radius } from "@styles";

export const Input = ({ labelType = "standard", ...props }: InputProps) => {
  const isFloating = labelType === "floating";
  return <StyledInput isFloating={isFloating} {...props} />;
};

const StyledInput = styled.input<StyledInputProps>`
  background: ${colors.inputBackground};
  border: 2px solid transparent;
  border-radius: ${radius.medium};
  font-size: ${fonts.medium};
  height: 40px;
  padding-left: ${padding.medium};
  width: 100%;
  z-index: ${({ isFloating }) => (isFloating ? "5" : "inherit")};
`;

/* eslint-disable-next-line */
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  labelType?: "standard" | "floating";
}

export interface StyledInputProps {
  isFloating: boolean;
}
