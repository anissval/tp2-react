import React from 'react';
import { Heroes } from './Heroes';
import { renderWithRouterAndRedux } from '../../mocks/TestUtils';
import { fireEvent, getByTestId, screen } from '@testing-library/react';
import heroesMock from '../../mocks/HeroesMock';

const hero = heroesMock[1];

describe('Heroes', () => {
  let component;
  beforeEach(() => {
    component = <Heroes />;
  });
  test('renders Heroes component', () => {
    const { container } = renderWithRouterAndRedux(component, '/heroes');
    //hero name : Celeritas
    const heroName = screen.queryByText(hero.name);
    const label = screen.queryByText('Hero name:');
    expect(label).toBeInTheDocument();
    expect(heroName).toBeInTheDocument();
  });

  test('Click', () => {
    const { container } = renderWithRouterAndRedux(component, '/heroes');
    const button = getByTestId(container, 'add-button');
    fireEvent.click(button);
  });
});
