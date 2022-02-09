import { render } from '@testing-library/react';

import UiInputDropdown from './ui-input-dropdown';

describe('UiInputDropdown', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UiInputDropdown />);
    expect(baseElement).toBeTruthy();
  });
});
