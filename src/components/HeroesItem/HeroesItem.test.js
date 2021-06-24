import React from 'react';
import {HeroesItem} from "./HeroesItem";
import {fireEvent, getByTestId, prettyDOM, render, screen} from "@testing-library/react";
import {renderWithRouterAndRedux} from "../../mocks/TestUtils";
import heroesMock from "../../mocks/HeroesMock";
import {Heroes} from "../heroes/Heroes";

const hero = heroesMock[1];

describe('HeroesItem', () => {
    let component;
    beforeEach(() => {
        component = <HeroesItem/>;
    });
    test('renders Heroes Item component', () => {
        const tree = renderWithRouterAndRedux(component, '/dashboard');
        console.log(prettyDOM(tree.container));
        expect(tree).toMatchSnapshot();
    });

    test("delete a Hero", () => {
        const tree = renderWithRouterAndRedux(component, '/dashboard');
        console.log(prettyDOM(tree.container));
        const heroName = screen.queryByText(hero.name);
        expect(heroName).toBeInTheDocument();
        const button = getByTestId(tree.container, `delete-button-${hero.id}`);
        fireEvent.click(button);
        expect(heroName).not.toBeInTheDocument();
    });
});
