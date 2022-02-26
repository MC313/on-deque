import styled from "@emotion/styled";
import { useSteps } from "@on-deque/context-steps";

import { BackButton } from "@on-deque/ui-back-button";
import { StepsIndicator } from "@on-deque/ui-steps-indicator";
import { flex } from "@styles";

export const SaveLinkHeader = () => {
  const [{ step, totalSteps }, { previousStep }] = useSteps();
  return (
    <StyledFeatureSaveLinkHeader>
      {step > 1 && <BackButton onClick={previousStep} />}
      <StepsIndicator current={step} total={totalSteps} />
    </StyledFeatureSaveLinkHeader>
  );
};

const StyledFeatureSaveLinkHeader = styled.header`
  ${flex.row}
  align-items: center;
  height: 30px;
  justify-content: space-between;
  width: 90%;
  margin: 10px auto auto auto;
  p {
    margin-left: auto;
  }
`;
