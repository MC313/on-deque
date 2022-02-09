import { render } from '@testing-library/react';

import FeatureStepsWizard from './feature-steps-wizard';

describe('FeatureStepsWizard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureStepsWizard />);
    expect(baseElement).toBeTruthy();
  });
});
