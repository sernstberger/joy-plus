import React from 'react';
import { render } from '@testing-library/react';

import PasswordInput from './PasswordInput';

describe('PasswordInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <PasswordInput fieldName="password" label="Password" />
    );
    expect(baseElement).toBeTruthy();
  });
});
