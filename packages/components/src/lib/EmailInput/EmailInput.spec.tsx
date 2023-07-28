import React from 'react';
import { render } from '@testing-library/react';

import EmailInput from './EmailInput';

describe('EmailInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <EmailInput fieldName="email" label="Email" />
    );
    expect(baseElement).toBeTruthy();
  });
});
