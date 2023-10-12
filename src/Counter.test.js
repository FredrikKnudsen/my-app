import Counter from './Counter';
import { render } from '@testing-library/react';

test('renders counter with initial count of 0', () => {
    const {getByText} = render(<Counter />);
    const initialCount = getByText('Counter: 0');
    expect(initialCount).toBeInTheDocument();
});
