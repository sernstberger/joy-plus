import React from 'react';
import { render } from '@testing-library/react';

import Nav from './Nav';

describe('Nav', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Nav title="Title goes here" />);
    expect(baseElement).toBeTruthy();
  });
});
