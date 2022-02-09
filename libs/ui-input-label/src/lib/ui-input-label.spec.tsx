import { render } from '@testing-library/react';

import { InputLabel } from './ui-input-label';

const props = {
  label: "First name",
  htmlFor: "firstName",
  required: false
}

describe('UiLabel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<InputLabel {...props} />);
    expect(baseElement).toBeTruthy();
  });
});
