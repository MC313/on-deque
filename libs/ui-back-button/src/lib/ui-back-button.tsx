import styled from "@emotion/styled";

import BackIcon from "../../arrow-west.svg";

export const BackButton = ({
  name,
  type = "button",
  ...props
}: BackButtonProps) => {
  return (
    <StyledBackButton name={name} type={type} {...props}>
      <BackIcon />
    </StyledBackButton>
  );
};

const StyledBackButton = styled.button`
  background: transparent;
  border: 0px;
  padding: 0px;
`;

/* eslint-disable-next-line */
export interface BackButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "styles"> {}
