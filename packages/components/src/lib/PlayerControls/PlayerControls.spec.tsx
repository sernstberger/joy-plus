import React from 'react';
import { render } from '@testing-library/react';

import PlayerControls from './PlayerControls';

describe('PlayerControls', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PlayerControls />);
    expect(baseElement).toBeTruthy();
  });
});
