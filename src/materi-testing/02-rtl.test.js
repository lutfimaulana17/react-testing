import { render, screen } from '@testing-library/react';
import App from '../App';

test("Menyapa Lutfi", () => {
    render(<App />);
    const text = screen.getByText("Hello Lutfi");
    expect(text).toBeInTheDocument();
})