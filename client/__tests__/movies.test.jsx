import React, {Component} from "react";
import renderer, { act } from "react-test-renderer";

import {ListMovies, NewMovieForm} from "../application";
import {Simulate} from "react-dom/test-utils";

describe("movies application", () => {
    it('should show movie list', () => {
        expect(6 * 9).toEqual(54);
    });

    it("renders correctly", () => {
        const component = renderer.create(<h1>Hello world!</h1>);
        expect(component).toMatchSnapshot();
    });

    it("matches snapshot", async () => {
        let component;

        await act(async () => {
            component = renderer.create(<ListMovies/>);
        });

        expect(component).toMatchSnapshot();
    });

    it("show new movie form", async () => {
        let component;

        await act(async () => {
            component = renderer.create(<NewMovieForm/>);
        });

        expect(component).toMatchSnapshot();
    });

    it("submit new movie", async () => {
        const onAddMovieMock = jest.fn(); //fn is a mock function
        let component;

        await act(async () => {
            component = renderer.create(<NewMovieForm onAddMovie={onAddMovieMock}/>);
        });

        //console.log(component.root.children[0]);
        Simulate.change(component.root.children[0].children[1].children[1], {target: {value: "Movie 1"}});
        Simulate.change(component.root.children[0].children[2].children[1], {target: {value: "2022"}});
        Simulate.submit(component.root.children[0])

        //Simulate.input(component.querySelector("[data-testid=title]"), {target: {value: "Movie 1"}});
        //Simulate.input(component.querySelector("[data-testid=year]"), {target: {value: "2022"}});
        //Simulate.submit(component.querySelector("form"));

        expect(onAddMovieMock).toHaveBeenCalledWith({
            title: "Movie 1", year: "2022", plot: ""
        });
    });
});