import React from 'react';
import Home from './page';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'

// Mock useRouter: https://stackoverflow.com/questions/76858797/error-invariant-expected-app-router-to-be-mounted-why-this-happened-when-using
jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null
    };
  }
}));



test('enter 40', async function() {
    render(<Home/>)
    var input = screen.getByTestId('enter')
    fireEvent.change(input, {target: {value: '40'}})
    await userEvent.click(screen.getByRole("button"))
    expect(screen.getByTestId('display').value).toBe('40')
    //var input = screen.getByID('enter')
    //fireEvent.change(input, {target: {value: '40'}})
    //expect(number).toBe('40')
  //expect(buttonClick(40)).toBe(40);
});

/*function example(n){
    return n * 5
}

test("example test", )*/