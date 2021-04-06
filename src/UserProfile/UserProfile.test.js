import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import UserProfile from './UserProfile'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <UserProfile />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})