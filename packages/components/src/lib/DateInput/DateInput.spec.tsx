import React from 'react';
import { render } from '@testing-library/react';

import DateInput from './DateInput';
import { Form } from '../components';

describe('DateInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Form>
        <DateInput fieldName="email" label="Email" />
      </Form>,
    );
    expect(baseElement).toBeTruthy();
  });
});
