import React from 'react'
import {render} from 'react-testing-library'
import {Header} from '../Header'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

test('should display Header component correctly', () => {
  const props = {
    branding: 'Star War People',
  }
  const {container, debug, getByText} = render(
    <Router>
      <Header {...props} />
    </Router>,
  )
  // debug()
  expect(container).toBeDefined()
  expect(
    container.querySelector(
      'nav.navbar.navbar-expand-sm.navbar-dark.bg-primary.mb-3.py-0',
    ),
  ).toBeTruthy()
  expect(container.querySelector('.container')).toBeTruthy()
  expect(container.querySelector('.navbar-brand')).toBeTruthy()
  expect(container.querySelector('ul.navbar-nav')).toBeTruthy()
  expect(container.querySelector('a.nav-link.home')).toBeTruthy()
  expect(container.querySelector('a.nav-link.list')).toBeTruthy()
  expect(container.querySelector('a.nav-link.about')).toBeTruthy()
  expect(container.querySelectorAll('li.nav-item').length).toEqual(3)
  getByText('Star War People')
  getByText('Home')
  getByText('People')
  getByText('About')
})
