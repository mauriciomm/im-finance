import React from 'react'
import { render, cleanup } from '@testing-library/react'
import Login from '.'

afterEach(cleanup)

test('renders title', () => {
  const { getByText } = render(<Login />)
  const linkElement = getByText(/Login/i)

  expect(linkElement).toBeInTheDocument()
})
