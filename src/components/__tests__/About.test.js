import React from 'react'
import {render} from 'react-testing-library'
import About from '../About'

test('should display About component correctly', () => {
  const {container, debug, getByText} = render(<About />)
  expect(container).toBeDefined()
  getByText('About Star War People')
  getByText('Simple app to view Star War People and the Films they are in')
  getByText('Version 1.0.0')
})
