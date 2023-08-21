import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import SelectInput from './SelectInput';
import { Form } from '../components';

describe('SelectInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Form>
        <SelectInput fieldName="test" label="Test" />
      </Form>,
    );
    expect(baseElement).toBeTruthy();
  });

  it('should render a label', () => {
    const { getByText } = render(
      <Form>
        <SelectInput fieldName="test" label="Test" />
      </Form>,
    );
    expect(getByText('Test')).toBeTruthy();
  });

  it('should render a helper text', () => {
    const { getByText } = render(
      <Form>
        <SelectInput fieldName="test" label="Test" helperText="Helper text" />
      </Form>,
    );
    expect(getByText('Helper text')).toBeTruthy();
  });

  it('should render a disabled input', () => {
    const { getByLabelText } = render(
      <Form>
        <SelectInput fieldName="test" label="Test" disabled />
      </Form>,
    );
    expect(getByLabelText('Test')).toBeDisabled();
  });

  it('should render a default value', () => {
    const { getByLabelText } = render(
      <Form>
        <SelectInput
          fieldName="test"
          label="Test"
          defaultValue="Default value"
        />
      </Form>,
    );
    expect(getByLabelText('Test')).toHaveValue('Default value');
  });
});
