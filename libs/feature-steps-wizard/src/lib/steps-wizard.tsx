import React from "react";

import styled from "@emotion/styled";

import { useSteps } from "@on-deque/context-steps";
import { flex } from "@styles";

export const StepsWizard = ({ children }: StepsWizardProps) => {
  const [{ step }] = useSteps();
  const wizardContainer = React.useRef<HTMLUListElement>(null);

  React.useLayoutEffect(() => {
    const STEP_WIDTH = 100;
    const position = STEP_WIDTH * (step - 1);

    if (wizardContainer && wizardContainer.current) {
      wizardContainer.current.style.transform = `translateX(-${position}%)`;
    }
  }, [step]);

  return (
    <StyledStepsWizardContainer>
      <StyledStepsWizard ref={wizardContainer}>{children}</StyledStepsWizard>
    </StyledStepsWizardContainer>
  );
};

const StyledStepsWizardContainer = styled.div`
  overflow: hidden;
  width: 100%;
`;

const StyledStepsWizard = styled.ul`
  ${flex.row}
  margin: 0px;
  padding: 0px;
  transition: transform 0.4s linear;
`;

/* eslint-disable-next-line */
export interface StepsWizardProps extends React.PropsWithChildren<{}> {}
