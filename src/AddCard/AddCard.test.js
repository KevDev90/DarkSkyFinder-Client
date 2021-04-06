import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import AddCard from './AddCard'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <AddCard />
    </BrowserRouter>,
    div
  )
  ReactDOM.unmountComponentAtNode(div)
})