import React from 'react';
import { render } from '@testing-library/react';

import ChartCard from './ChartCard';

describe('ChartCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChartCard title="foobar" value={2} />);
    expect(baseElement).toBeTruthy();
  });
});
