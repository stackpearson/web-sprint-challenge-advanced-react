import React from "react";
import ReactDOM from 'react-dom';
import { render } from "@testing-library/react";

import '@testing-library/jest-dom/extend-expect';
import App from '../App';


// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<App />)
    const Title = getByText(/stuff/i)
    expect(Title).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {});
