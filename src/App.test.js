// import { render, screen } from '@testing-library/react';
// import App from './App/App.js';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './App/App'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})