import styled from "@emotion/styled";

import { FormProvider } from "@on-deque/context-form";
import { StepsProvider } from "@on-deque/context-steps";
import { SaveLinkHeader } from "@on-deque/feature-save-link-header";
import { StepOne } from "@on-deque/feature-step-one";
import { StepThree } from "@on-deque/feature-step-three";
import { StepTwo } from "@on-deque/feature-step-two";
import { StepsWizard } from "@on-deque/feature-steps-wizard";
import { flex } from "@styles";

export const SaveLink = () => {
  return (
    <StepsProvider totalSteps={3}>
      <SaveLinkHeader />
      <FormProvider>
        <Styledform>
          <StepsWizard>
            <StepOne />
            <StepTwo />
            <StepThree />
          </StepsWizard>
        </Styledform>
      </FormProvider>
    </StepsProvider>
  );
};

const Styledform = styled.form`
  ${flex.center}
  ${flex.column}
`;
