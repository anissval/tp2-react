import React from 'react';
import { HeroesItem } from './HeroesItem';
import { fireEvent, getByTestId, screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from '../../mocks/TestUtils';
import heroesMock from '../../mocks/HeroesMock';

const hero = heroesMock[1];

describe('HeroesItem', () => {
  let component;
  beforeEach(() => {
    component = <HeroesItem />;
  });
  test('renders Heroes Item component', () => {
    const tree = renderWithRouterAndRedux(component, '/dashboard');
    expect(tree).toMatchSnapshot();
  });

  test('delete a Hero', () => {
    const tree = renderWithRouterAndRedux(component, '/dashboard');
    const heroName = screen.queryByText(hero.name);
    expect(heroName).toBeInTheDocument();
    const button = getByTestId(tree.container, `delete-button-${hero.id}`);
    fireEvent.click(button);
    expect(heroName).not.toBeInTheDocument();
  });
});
