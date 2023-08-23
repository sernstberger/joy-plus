import React from 'react';
import { render } from '@testing-library/react';

import FeinInput from './FeinInput';
import { Form } from '../components';

describe('FeinInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Form>
        <FeinInput fieldName="fein" label="FEIN" />
      </Form>,
    );
    expect(baseElement).toBeTruthy();
  });
});
