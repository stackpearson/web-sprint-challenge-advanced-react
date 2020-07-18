import React from "react";
import ReactDOM from 'react-dom';
import { render, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import App from '../App';
import CheckoutForm from './CheckoutForm';


// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<App />)
    const Title = getByText(/React Plants/i)
    //changing the text to some text forces failure
    
    expect(Title).toBeInTheDocument();
});

test("form shows success message on submit with form details", () => {
    const { getByTestId } = render(<CheckoutForm />);
    let checkoutButton = getByTestId('checkout-button');
    fireEvent.click(checkoutButton);
    //removing the fireEvent makes the test fail

    let Confirmation = document.getElementById('successMessage');
    expect(Confirmation).toBeInTheDocument();

});
