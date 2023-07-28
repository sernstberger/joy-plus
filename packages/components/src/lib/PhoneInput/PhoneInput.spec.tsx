import React from 'react';
import { render } from '@testing-library/react';

import PhoneInput from './PhoneInput';

describe('PhoneInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PhoneInput />);
    expect(baseElement).toBeTruthy();
  });
});
