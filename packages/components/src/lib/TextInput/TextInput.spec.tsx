import React from 'react';
import { render } from '@testing-library/react';

import TextInput from './TextInput';

describe('TextInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TextInput fieldName="test" label="Test" />);
    expect(baseElement).toBeTruthy();
  });
});
