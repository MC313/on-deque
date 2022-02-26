import styled from "@emotion/styled";

import { colors, fonts, margin } from "@styles";

enum LabelStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export const InputLabel = ({
  htmlFor,
  labelStatus,
  label,
  labelType = "standard",
  required,
}: LabelProps) => {
  const isFloatingLabel = labelType === "floating";
  const animateLabel: boolean = isFloatingLabel && labelStatus === "ACTIVE";

  return (
    <StyledLabel
      animateLabel={animateLabel}
      htmlFor={htmlFor}
      floatingLabel={isFloatingLabel}
    >
      {label}
      {required ? " (Required)" : ""}
    </StyledLabel>
  );
};

const StyledLabel = styled.label<StyledLabelProps>`
  color: ${colors.primary};
  transform: ${({ animateLabel }) =>
    animateLabel ? "translate(0%, 0%) scale(0.9)" : "translate(5%, 70%)"};
  transition: transform 0.5s ease;
  z-index: ${({ floatingLabel }) => (floatingLabel ? "10" : "inherit")};
`;

/* eslint-disable-next-line */
export interface LabelProps {
  htmlFor?: string;
  required?: boolean;
  label: string;
  labelStatus?: LabelStatus;
  labelType?: "standard" | "floating";
}

interface StyledLabelProps {
  animateLabel: boolean;
  floatingLabel: boolean;
}
