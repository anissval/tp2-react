import { prettyDOM, screen, waitFor } from '@testing-library/react';
import heroesMock from '../../mocks/HeroesMock';
import { HeroDetails } from './HeroDetails';
import { renderWithRouterAndRedux } from '../../mocks/TestUtils';

const hero = heroesMock[0];
const url = `/hereDetails/${hero.id}`;

jest.mock('react-router-dom', () => ({
  // use actual for all non-hook parts
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: 13 }),
}));

describe('Tests del componente HeroDetail.', () => {
  it('El componente HeroDetail se renderiza correctamente.', async () => {
    const tree = renderWithRouterAndRedux(<HeroDetails />, url);
    await waitFor(() => {
      expect(screen.getByText(`${hero.name} Details`)).toBeInTheDocument();
      expect(screen.getByText('Hero name:')).toBeInTheDocument();
    });

    expect(tree).toMatchSnapshot();
  });
});
