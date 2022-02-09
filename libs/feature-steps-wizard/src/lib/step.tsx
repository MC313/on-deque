import React from "react";

import styled from "@emotion/styled";

export const Step = ({ children, center, scroll }: StepProps) => {
  return (
    <StyledListItem center scroll>
      {children}
    </StyledListItem>
  );
};

const StyledListItem = styled.li<StepProps>`
    display: flex;
    flex-direction: column;
    min-width: 100%;
    margin: 15px 0px;
    justify-content: ${({ center }) => (center ? "center" : "inherit")},
    overflow-y: ${({ scroll }) => (scroll ? "scroll" : "hidden")}
`;

interface StepProps extends React.PropsWithChildren<{}> {
  center?: boolean;
  scroll?: boolean;
}
