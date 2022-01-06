import { render, screen } from '@testing-library/react';
import AboutSection from '../../components/AboutSection';
import { IAboutProps } from '../../lib/types';

describe('<AboutSection />', () => {
  const props: IAboutProps = {
    text: {
      one: 'Text One',
      two: 'Text Two'
    },
    education: ['Test education'],
    skills: {
      frontend: ['Test frontend skill'],
      backend: ['Test backend skill'],
      styling: ['Test styling skill'],
      others: ['Test others skill']
    }
  };

  it('renders about section correctly', () => {
    render(<AboutSection about={props} />);

    const aboutHeading = screen.getByRole('heading', { name: /about me/i });
    const educationHeading = screen.getByText(/education & certifications:/i);
    const technologiesHeading = screen.getByText(
      /some technologies i'm familiar with:/i
    );

    expect(aboutHeading).toBeInTheDocument();
    expect(educationHeading).toBeInTheDocument();
    expect(technologiesHeading).toBeInTheDocument();
  });

  it('renders the props correctly', () => {
    const { container } = render(<AboutSection about={props} />);

    expect(container).toMatchSnapshot();
  });
});
