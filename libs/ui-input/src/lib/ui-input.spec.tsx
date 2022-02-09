import { render } from '@testing-library/react';

import UiInput from './ui-input';

describe('UiInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiInput />);
    expect(baseElement).toBeTruthy();
  });
});
