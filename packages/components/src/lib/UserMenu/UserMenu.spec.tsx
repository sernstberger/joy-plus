import React from 'react';
import { render } from '@testing-library/react';
import UserMenu from './UserMenu';

describe('UserMenu', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <UserMenu
        img="https://images.unsplash.com/photo-1542773998-9325f0a098d7?auto=format&fit=crop&w=320"
        title="Foo"
        description="bar"
      />,
    );
    expect(baseElement).toBeTruthy();
  });
});
