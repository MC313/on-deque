import { render } from '@testing-library/react';

import UiInputError from './ui-input-error';

describe('UiInputError', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiInputError />);
    expect(baseElement).toBeTruthy();
  });
});
