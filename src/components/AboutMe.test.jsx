import { render, screen } from '@testing-library/react';
import AboutMe from './AboutMe';

describe('AboutMe Component', () => {
    it('renders the "Meet the Developer" heading', () => {
        render(<AboutMe />);
        expect(screen.getByText(/Meet the Developer/i)).toBeInTheDocument();
    });

    it('renders the profile image', () => {
        render(<AboutMe />);
        const image = screen.getByAltText(/Developer/i);
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', '/me.png');
    });
});
