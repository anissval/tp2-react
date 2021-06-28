import React from 'react';
import { Dashboard } from './Dashboard';
import { renderWithRouterAndRedux } from '../../mocks/TestUtils';
import heroesMock from '../../mocks/HeroesMock';
import { screen, waitFor } from '@testing-library/react';

describe('Tests del componente Dashboard.', () => {
  it('El componente Dashboard se renderiza correctamente.', async () => {
    const tree = renderWithRouterAndRedux(<Dashboard />, '/dashboard');
    await waitFor(() => {
      heroesMock.forEach(hero => {
        const title = screen.queryByText('Top Heroes');
        expect(title).toBeInTheDocument();
        const heroName = screen.getAllByText('Tornado');
        expect(heroName[0]).toBeInTheDocument();
      });
    });
    expect(tree).toMatchSnapshot();
  });
});
