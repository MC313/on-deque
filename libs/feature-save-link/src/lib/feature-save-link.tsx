import styled from "@emotion/styled";

import { FormProvider } from "@on-deque/context-form";
import { StepsProvider } from "@on-deque/context-steps";
import { StepOne } from "@on-deque/feature-step-one";
import { StepTwo } from "@on-deque/feature-step-two";
import { StepsWizard } from "@on-deque/feature-steps-wizard";
import { flex } from "@styles";

export const SaveLink = (props: FeatureSaveLinkProps) => {
  return (
    <FormProvider>
      <Styledform>
        <StepsProvider totalSteps={3}>
          <StepsWizard>
            <StepOne />
            <StepTwo />
          </StepsWizard>
        </StepsProvider>
      </Styledform>
    </FormProvider>
  );
};

/* eslint-disable-next-line */
export interface FeatureSaveLinkProps {}

const Styledform = styled.form`
  ${flex.center}
  ${flex.column}
`;
