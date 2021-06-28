import { screen } from '@testing-library/react';
import { HeroSearch } from './HeroSearch';
import { renderWithRouterAndRedux } from '../../mocks/TestUtils';

describe('Tests del componente HeroSearch.', () => {
  test('El componente HeroSearch se renderiza correctamente.', () => {
    const tree = renderWithRouterAndRedux(<HeroSearch />, 'dashboard');
    expect(tree).toMatchSnapshot();
    const label = screen.queryByText('Hero Search:');
    expect(label).toBeInTheDocument();
  });
});
