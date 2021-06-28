import React from 'react';
import { App } from './App';
import { renderWithRedux } from './mocks/TestUtils';

describe('App', () => {
  test('renders App component', () => {
    const tree = renderWithRedux(<App />);
    expect(tree).toMatchSnapshot();
  });
});
