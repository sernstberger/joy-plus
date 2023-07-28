import React from 'react';
import { render } from '@testing-library/react';

import TextInput from './TextInput';
import { Form } from '../components';

describe('TextInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Form>
        <TextInput fieldName="test" label="Test" />
      </Form>
    );
    expect(baseElement).toBeTruthy();
  });
});
