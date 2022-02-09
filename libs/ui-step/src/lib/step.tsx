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

const StyledStep = styled.li`
  overflow: ${({ scroll }: StepProps) => (scroll ? "scroll" : "hidden")};
  display: flex;
  flex-direction: column;
  align-items: ${({ center }: StepProps) => (center ? "center" : "inherit")};
  min-width: 100%;
  margin: 15px 0px;
`;
