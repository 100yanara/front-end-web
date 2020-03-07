import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';
import App from './App';

test('full app rendering/navigating', () => {
  const history = createMemoryHistory();
  const { container } = render(
    <Router history={history}>
      <App />
    </Router>
  );
  /**
   * verify page content for expected route
   */
  expect(container.innerHTML).toMatch('home page');
});

test('landing on a bad page shows 404 page', () => {
  const history = createMemoryHistory();
  history.push('/some/bad/route');
  const { getByRole } = render(
    <Router history={history}>
      <App />
    </Router>
  );
  expect(getByRole('heading')).toHaveTextContent('404 Not Found');
});
