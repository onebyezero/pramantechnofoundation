import React from 'react';
import './__mocks__/intersectionObserverMock';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const homeLinkElement = getByText(/Home/i);
  const aboutLinkElement = getByText(/About/i);
  const visionLinkElement = getByText(/Vision & Mission/i);
  const contactLinkElement = getByText(/Contact Us/i);
  
  expect(homeLinkElement).toBeInTheDocument();
  expect(aboutLinkElement).toBeInTheDocument();
  expect(visionLinkElement).toBeInTheDocument();
  expect(contactLinkElement).toBeInTheDocument();
});
