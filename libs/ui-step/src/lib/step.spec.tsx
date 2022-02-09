import { render } from '@testing-library/react';

import UiStep from './step';

describe('UiStep', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiStep />);
    expect(baseElement).toBeTruthy();
  });
});
