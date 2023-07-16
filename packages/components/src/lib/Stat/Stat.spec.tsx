import { render } from '@testing-library/react';

import Stat from './Stat';

describe('Stat', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Stat value={1234.56} previousValue={1234} />
    );
    expect(baseElement).toBeTruthy();
  });
});
