import styled from "@emotion/styled";

import BackIcon from "../../arrow-west.svg";

export const IconButton = ({
  children,
  name,
  type = "button",
  ...props
}: IconButtonProps) => {
  return (
    <StyledIconButton name={name} type={type} {...props}>
      {children}
    </StyledIconButton>
  );
};

const StyledIconButton = styled.button`
  background: transparent;
  border: 0px;
  padding: 0px;
`;

/* eslint-disable-next-line */
export interface IconButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "styles"> {}
