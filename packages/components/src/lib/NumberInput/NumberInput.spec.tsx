import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import NumberInput from './NumberInput';
import { Form } from '../components';

describe('NumberInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Form>
        <NumberInput fieldName="test" label="Test" />
      </Form>,
    );
    expect(baseElement).toBeTruthy();
  });

  it('should return a number', async () => {
    const onSubmit = jest.fn();

    render(
      <Form onSubmit={onSubmit}>
        <NumberInput
          fieldName="testField"
          label="Test Label"

          // defaultValue={123}
        />
      </Form>,
    );

    userEvent.type(screen.getByLabelText('Test Label'), '456');
    userEvent.click(screen.getByText('Submit'));

    // expect(onSubmit).toHaveBeenCalledWith(456); // If the input is a string, this will fail.

    await waitFor(() => expect(onSubmit).toHaveBeenCalled());
  });
});
