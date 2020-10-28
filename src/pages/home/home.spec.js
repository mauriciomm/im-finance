import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Home from '.'

afterEach(cleanup)

test('renders title', () => {
  const { getByText } = render(<Home />)
  const linkElement = getByText(/Home/i)

  expect(linkElement).toBeInTheDocument()
})
