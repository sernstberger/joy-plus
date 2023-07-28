import React from 'react';
import { render } from '@testing-library/react';

import PhoneInput from './PhoneInput';
import { Form } from '../components';

describe('PhoneInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Form>
        <PhoneInput fieldName="phone" label="Phone" />
      </Form>
    );
    expect(baseElement).toBeTruthy();
  });
});
