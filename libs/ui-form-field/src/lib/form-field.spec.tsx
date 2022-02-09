import { render } from '@testing-library/react';

import UiFormField from './ui-form-field';

describe('UiFormField', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiFormField />);
    expect(baseElement).toBeTruthy();
  });
});
