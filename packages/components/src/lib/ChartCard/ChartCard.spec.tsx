import { render } from '@testing-library/react';

import ChartCard from './ChartCard';

describe('ChartCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ChartCard />);
    expect(baseElement).toBeTruthy();
  });
});
