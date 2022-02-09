import { render } from '@testing-library/react';

import ContextForm from './context-form';

describe('ContextForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ContextForm />);
    expect(baseElement).toBeTruthy();
  });
});
