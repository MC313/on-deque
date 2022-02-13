import styled from "@emotion/styled";
import React from "react";

export const Step = ({ children, center = false }: StepProps) => {
  return <StyledStep center={center}>{children}</StyledStep>;
};

/* eslint-disable-next-line */
export type StepProps = React.PropsWithChildren<{
  center?: boolean;
  scroll?: boolean;
}>;

const StyledStep = styled.li<StepProps>`
  display: flex;
  flex-direction: column;
  justify-content: ${({ center }) => (center ? "center" : "inherit")};
  margin: 15px 0px;
  min-width: 100%;
  overflow: ${({ scroll }) => (scroll ? "scroll" : "hidden")};
`;
