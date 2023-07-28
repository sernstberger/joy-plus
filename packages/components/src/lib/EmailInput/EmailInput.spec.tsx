import React from 'react';
import { render } from '@testing-library/react';

import EmailInput from './EmailInput';
import { Form } from '../components';

describe('EmailInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Form>
        <EmailInput fieldName="email" label="Email" />
      </Form>
    );
    expect(baseElement).toBeTruthy();
  });
});
