import React from 'react';
import { render } from '@testing-library/react';

import CheckboxInput from './CheckboxInput';
import { Form } from '../components';

describe('CheckboxInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Form>
        <CheckboxInput fieldName="email" label="Email" />
      </Form>,
    );
    expect(baseElement).toBeTruthy();
  });
});
