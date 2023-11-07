import React from "react";
import renderer, { act } from "react-test-renderer";

import {ListMovies} from "../application";

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
});