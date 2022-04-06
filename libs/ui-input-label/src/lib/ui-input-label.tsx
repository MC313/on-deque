import styled from "@emotion/styled";

import { colors, fonts } from "@styles";

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

const setColor = ({ floatingLabel, animateLabel }: StyledLabelProps) => {
  if (floatingLabel && !animateLabel) {
    return `${colors.grey}`;
  } else {
    return `${colors.primary}`;
  }
};

const StyledLabel = styled.label<StyledLabelProps>`
  color: ${({ animateLabel, floatingLabel }) =>
    setColor({ floatingLabel, animateLabel })};
  font-size: ${fonts.medium};
  transform: ${({ animateLabel }) =>
    animateLabel ? "translate(5%, 0%)" : "translate(5%, 70%)"};
  transition: transform 0.2s linear;
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
