import React from 'react';
import { render } from '@testing-library/react';
import ConnectInput from './ConnectInput';
import { Input } from '@mui/joy';

describe('ConnectInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ConnectInput
        fieldName="test"
        label="Test"
        required
        helperText="nope"
        defaultValue="default"
      >
        {({ formState, field }: any) => <Input value={field.value} />}
      </ConnectInput>
    );
    expect(baseElement).toBeTruthy();
  });
});
