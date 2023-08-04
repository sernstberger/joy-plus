import React from 'react';
import { render } from '@testing-library/react';
import Carousel from './Carousel';

describe('Carousel', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Carousel
        img="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320"
        title="Foo"
        description="bar"
      />,
    );
    expect(baseElement).toBeTruthy();
  });
});
