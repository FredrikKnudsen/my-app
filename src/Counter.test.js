import Counter from './Counter';
import { fireEvent, render } from '@testing-library/react';

test('renders counter with initial count of 0', () => {
    const {getByText} = render(<Counter />);
    const initialCount = getByText('Counter: 0');
    expect(initialCount).toBeInTheDocument();
});

test('increase count when button is clicked', () => {
    const {getByText} = render(<Counter />);
    const increaseNumberButton = getByText('Increase');
    fireEvent.click(increaseNumberButton);
      
    const increasedCount = getByText('Counter: 1')
    expect(increasedCount).toBeInTheDocument;
})