import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NumberOfEvents from '../components/NumberOfEvents';

test('contains an element with role spinbutton', () => {
    render(<NumberOfEvents />);
    expect(screen.getByRole('spinbutton')).toBeInTheDocument();
});

test('default value of the input field is 32', () => {
    render(<NumberOfEvents />);
    const inputElement = screen.getByRole('spinbutton');
    expect(inputElement).toHaveValue(32);
});

test('value of the input field changes when user types in it', async () => {
    let currentNOE = 32;
    const setCurrentNOE = (value) => { currentNOE = value };
    render(<NumberOfEvents setCurrentNOE={setCurrentNOE} />);
    const inputElement = screen.getByRole('spinbutton');
    fireEvent.change(inputElement, { target: { value: '10' } });
    expect(inputElement).toHaveValue(10);
    expect(currentNOE).toBe(10);
});
