import { render } from '@testing-library/react';

import FeatureStepThree from './feature-step-three';

describe('FeatureStepThree', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureStepThree />);
    expect(baseElement).toBeTruthy();
  });
});
