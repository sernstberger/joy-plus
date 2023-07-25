import { render } from '@testing-library/react';

import ConnectInput from './ConnectInput';

describe('ConnectInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ConnectInput />);
    expect(baseElement).toBeTruthy();
  });
});
