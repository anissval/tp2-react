import React from 'react';
import {App} from "./App";
import {renderWithRedux} from "./mocks/TestUtils";
import {prettyDOM} from "@testing-library/react";

describe('App', () => {
  test('renders App component', () => {
    const tree = renderWithRedux(<App/>);
    console.log(prettyDOM(tree.container));
    expect(tree).toMatchSnapshot();
  });
});
