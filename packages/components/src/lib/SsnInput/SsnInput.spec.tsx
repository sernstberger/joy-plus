import React from 'react';
import { render } from '@testing-library/react';

import SsnInput from './SsnInput';
import { Form } from '../components';

describe('SsnInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Form>
        <SsnInput fieldName="ssn" label="SSN" />
      </Form>,
    );
    expect(baseElement).toBeTruthy();
  });
});
