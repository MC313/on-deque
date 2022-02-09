import { render } from '@testing-library/react';

import FeatureStepTwo from './feature-step-two';

describe('FeatureStepTwo', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureStepTwo />);
    expect(baseElement).toBeTruthy();
  });
});
