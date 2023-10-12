import UserCreation from "./User";
import { render } from '@testing-library/react';

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
