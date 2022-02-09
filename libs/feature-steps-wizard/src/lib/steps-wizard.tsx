import React from "react";

import styled from "@emotion/styled";

import { flex } from "@styles";
import { useSteps } from "@on-deque/context-steps";

export const StepsWizard = ({ children }: StepsWizardProps) => {
  const [{ step }] = useSteps();
  const wizardContainer = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    console.log("running transform ref: ", step);
    const STEP_WIDTH = 100;
    const position = STEP_WIDTH * step;
    if (wizardContainer && wizardContainer.current) {
      wizardContainer.current.style.transform = `translateX(${position})`;
    }
  }, [step]);

  return (
    <StyledStepsWizardContainer>
      <StyledStepsWizard ref={(wizardContainer) => null}>
        {children}
      </StyledStepsWizard>
    </StyledStepsWizardContainer>
  );
};

const StyledStepsWizardContainer = styled.div`
  overflow: hidden;
  width: 100%;
`;

const StyledStepsWizard = styled.ul`
  ${flex.row}
  margin: "0px",
  padding: "0px",
  transition: "transform 0.4s linear"
`;

/* eslint-disable-next-line */
export interface StepsWizardProps extends React.PropsWithChildren<{}> {}
