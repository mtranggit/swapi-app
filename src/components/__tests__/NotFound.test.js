import React from 'react'
import {render} from 'react-testing-library'
import NotFound from '../NotFound'

test('should display Not Found component correctly', () => {
  const {container, debug, getByText} = render(<NotFound />)
  expect(container).toBeDefined()
  getByText('Sorry, that page does not exist')
})
