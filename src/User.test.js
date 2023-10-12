import UserCreation from "./User";
import { render, fireEvent } from '@testing-library/react';

test('renders user creation', () => {
    const {getByText} = render(<UserCreation />);
    const heading = getByText('User Creation');
    expect(heading).toBeInTheDocument();
});

test('renders form for user creation', () => {
    const {getByLabelText} = render(<UserCreation />);
    const email = getByLabelText('Email:');
    const username = getByLabelText('Username:');
    const password = getByLabelText('Password:');
    expect(email).toBeInTheDocument();
    expect(username).toBeInTheDocument();
    expect(password).toBeInTheDocument();
});

test('data is submitted', () => {
    const { getByText, getByLabelText } = render(<UserCreation />);
    const usernameInput = getByLabelText('Username:');
    const emailInput = getByLabelText('Email:');
    const passwordInput = getByLabelText('Password:');
    const registerButton = getByText('Register');
    
    //Fikk hjelp av dette for det under: https://stackoverflow.com/questions/63807689/fireevent-change-does-not-input-value
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.click(registerButton);
})