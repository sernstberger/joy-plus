import React from 'react';
import { render } from '@testing-library/react';

import Form from './Form';
import { TextInput } from '../components';

describe('Form', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Form>
        <TextInput fieldName="textInput" label="Text" required />
      </Form>
    );
    expect(baseElement).toBeTruthy();
  });
});
