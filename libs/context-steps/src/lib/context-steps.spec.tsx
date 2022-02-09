import { render } from '@testing-library/react';

import ContextSteps from './context-steps';

describe('ContextSteps', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContextSteps />);
    expect(baseElement).toBeTruthy();
  });
});
