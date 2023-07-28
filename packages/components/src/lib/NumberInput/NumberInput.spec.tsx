import React from 'react';
import { render } from '@testing-library/react';

import NumberInput from './NumberInput';
import { Form } from '../components';

describe('TextInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Form>
        <NumberInput fieldName="number" label="Number" />
      </Form>
    );
    expect(baseElement).toBeTruthy();
  });
});
