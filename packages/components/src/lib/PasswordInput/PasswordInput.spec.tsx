import React from 'react';
import { render } from '@testing-library/react';

import PasswordInput from './PasswordInput';
import { Form } from '../components';

describe('PasswordInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Form>
        <PasswordInput fieldName="password" label="Password" />
      </Form>
    );
    expect(baseElement).toBeTruthy();
  });
});
