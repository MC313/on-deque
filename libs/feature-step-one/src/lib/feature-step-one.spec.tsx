import { render } from '@testing-library/react';

import FeatureStepOne from './feature-step-one';

describe('FeatureStepOne', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureStepOne />);
    expect(baseElement).toBeTruthy();
  });
});
