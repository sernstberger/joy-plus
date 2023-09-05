import React from 'react';
import { render } from '@testing-library/react';

import FileUploadInput from './FileUploadInput';
import { Form } from '../Form/Form';

describe('FileUploadInput', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Form>
        <FileUploadInput fieldName="file" label="file" />
      </Form>,
    );
    expect(baseElement).toBeTruthy();
  });
});
