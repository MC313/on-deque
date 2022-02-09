import { render } from '@testing-library/react';

import FeatureSaveLink from './feature-save-link';

describe('FeatureSaveLink', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureSaveLink />);
    expect(baseElement).toBeTruthy();
  });
});
