import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface FeatureStepThreeProps {}

const StyledFeatureStepThree = styled.div`
  color: pink;
`;

export function FeatureStepThree(props: FeatureStepThreeProps) {
  return (
    <StyledFeatureStepThree>
      <h1>Welcome to FeatureStepThree!</h1>
    </StyledFeatureStepThree>
  );
}

export default FeatureStepThree;
