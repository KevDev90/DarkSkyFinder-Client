import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import NavMain from './NavMain'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <NavMain />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})