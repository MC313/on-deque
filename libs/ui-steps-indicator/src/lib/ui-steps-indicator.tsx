import styled from "@emotion/styled";

import { colors, fonts } from "@styles";

export const StepsIndicator = ({ current, total }: StepsIndicatorProps) => (
  <StyledStepsIndicator>
    Step {current} of {total}
  </StyledStepsIndicator>
);

const StyledStepsIndicator = styled.p`
  color: ${colors.grey};
  font-size: ${fonts.medium};
`;

/* eslint-disable-next-line */
export interface StepsIndicatorProps {
  current: number;
  total: number;
}
